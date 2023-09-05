// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDrO5Ualu_S2zN-LdGhC9PQ3JRpH_gny4",
  authDomain: "netflixgpt-70ca2.firebaseapp.com",
  projectId: "netflixgpt-70ca2",
  storageBucket: "netflixgpt-70ca2.appspot.com",
  messagingSenderId: "479915542325",
  appId: "1:479915542325:web:c1f889bab263ebe4a9ae7c",
  measurementId: "G-MMRE8N94RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
