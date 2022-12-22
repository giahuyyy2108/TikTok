// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNlbE5IEXwBgbk2HXvzRGcKFWacmISjjc",
  authDomain: "tiktok-67042.firebaseapp.com",
  projectId: "tiktok-67042",
  storageBucket: "tiktok-67042.appspot.com",
  messagingSenderId: "211149204334",
  appId: "1:211149204334:web:5df3fa315514edd047af7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  getFirestore();
