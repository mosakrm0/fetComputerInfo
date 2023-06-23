// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt_WSHBDfbqMf7n_NgGPqFc9J8IGRsK9I",
  authDomain: "lajnatsanafer.firebaseapp.com",
  projectId: "lajnatsanafer",
  storageBucket: "lajnatsanafer.appspot.com",
  messagingSenderId: "608439585907",
  appId: "1:608439585907:web:56b0b53d83ab508f9f6e06",
  measurementId: "G-EK2QX6PGJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);