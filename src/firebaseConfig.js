// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIIm0UKWHVX5RtwZg1q658ObAABDRgvJM",
  authDomain: "portfolio-web-543c3.firebaseapp.com",
  projectId: "portfolio-web-543c3",
  storageBucket: "portfolio-web-543c3.firebasestorage.app",
  messagingSenderId: "723849168569",
  appId: "1:723849168569:web:f2e3f7a64cb50d581dfd68",
  measurementId: "G-QVB7RN9HYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };