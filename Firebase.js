// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhhFs6ZhzOKspX-gzUjsmKgdD0hrhDlmQ",
  authDomain: "react-native-app-2e321.firebaseapp.com",
  projectId: "react-native-app-2e321",
  storageBucket: "react-native-app-2e321.appspot.com",
  messagingSenderId: "116388358322",
  appId: "1:116388358322:web:6d8d9dc0f90b58afa581ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
