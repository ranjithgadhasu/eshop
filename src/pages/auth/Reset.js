import resetImg from "../../assets/forgot.png";
import Card from '../../components/card/Card';
import styles from "./auth.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import Loader from "../../components/loader/Loader";


const Reset = () => {
const [email, setEmail] = useState("");
const [isLoading, setIsLoading] = useState(false);

const resetPassword = (e) => {
 e.preventDefault();
 setIsLoading(true);

 sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false);
    toast.success("Check youe email for a reset link");
  })
  .catch((error) => {
    setIsLoading(false);
    toast.error(error.message);
  });
  };

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
   <img src={resetImg} alt="Reset Password" width= "400px" /> 
    </div>


    <Card>
   <div className={styles.form}>
    <h2>Reset Password</h2>
    <form onSubmit={resetPassword}>
     <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
     <br/>

     <button type="submit" className="--btn --btn-primary --btn-block">Reset Password</button>
     <div className="d-flex justify-content-between align-items-center">
     <p> <Link to="/login">- Login</Link></p>
   
     <p><Link to="/register">- Register</Link></p>
     </div>
    </form>
   </div>
   </Card>
  </section>
  </>
  );
};

export default Reset;