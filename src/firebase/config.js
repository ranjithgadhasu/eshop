import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyASsO4VzGI23PijU3sPe7SBduxgpP6lKnc",
  authDomain: "eshop-bbf4d.firebaseapp.com",
  projectId: "eshop-bbf4d",
  storageBucket: "eshop-bbf4d.appspot.com",
  messagingSenderId: "934471975963",
  appId: "1:934471975963:web:c8bd15e081e6bd1543a4be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;