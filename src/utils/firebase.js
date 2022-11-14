// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9j6pXtCb5cyDtPsyKMJNevsWxf5jnNLQ",

  authDomain: "mental-health-de767.firebaseapp.com",

  projectId: "mental-health-de767",

  storageBucket: "mental-health-de767.appspot.com",

  messagingSenderId: "507689560616",

  appId: "1:507689560616:web:c3d59b1d628a4d85f9231d",

  measurementId: "G-XG8NGH4ZEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
