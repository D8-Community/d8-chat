// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZP-b5LWkYX3DaNMZYvuklq7V2Jqe2L8s",
  authDomain: "d8-chat.firebaseapp.com",
  projectId: "d8-chat",
  storageBucket: "d8-chat.appspot.com",
  messagingSenderId: "1076445549099",
  appId: "1:1076445549099:web:e5abbaae263202b99dd06e",
  measurementId: "G-85BNGXDH3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
