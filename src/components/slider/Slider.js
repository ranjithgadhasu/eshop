import { useEffect, useState, useRef, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider.data";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  const intervalTime = 5000;

  const nextSlide = useCallback(() => {  // Wrap nextSlide in useCallback
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  }, [currentSlide, slideLength]);  // List dependencies of nextSlide

  const prevSlide = useCallback(() => {  // Also wrap prevSlide in useCallback
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  }, [currentSlide, slideLength]);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  
  const slideIntervalRef = useRef();

  useEffect(() => {
    function auto() {
      slideIntervalRef.current = setInterval(nextSlide, intervalTime);
    }
    
    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideIntervalRef.current);
  }, [currentSlide, intervalTime, autoScroll, nextSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((Slide, index) => {
        const { image, heading, desc } = Slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#product" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
