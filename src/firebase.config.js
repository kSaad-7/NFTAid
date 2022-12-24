// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSChNhtYDnnPSd9dYughYeT_CnsGNtW_s",
  authDomain: "nftaid-79665.firebaseapp.com",
  projectId: "nftaid-79665",
  storageBucket: "nftaid-79665.appspot.com",
  messagingSenderId: "704084323284",
  appId: "1:704084323284:web:f19012bd9f24177eb54441",
  measurementId: "G-2H6G3XD7J3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
