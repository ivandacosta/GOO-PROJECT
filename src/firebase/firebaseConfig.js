// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJRPA6HJ9Bs51sFvi6ThPweurV0DR8T78",
  authDomain: "gou-ecommerce.firebaseapp.com",
  projectId: "gou-ecommerce",
  storageBucket: "gou-ecommerce.appspot.com",
  messagingSenderId: "930379112437",
  appId: "1:930379112437:web:b468c9637cbcc65b470abc",
  measurementId: "G-EVT9WVJ7TB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
