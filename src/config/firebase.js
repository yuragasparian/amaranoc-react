// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPRW_ojjx8o_mIitJ5_X9ajXFMShAPxJc",
  authDomain: "amaranoc-dataset.firebaseapp.com",
  databaseURL: "https://amaranoc-dataset-default-rtdb.firebaseio.com/",
  projectId: "amaranoc-dataset",
  storageBucket: "amaranoc-dataset.firebasestorage.app",
  messagingSenderId: "416905225326",
  appId: "1:416905225326:web:00b17e473f93a7c05b327f",
  measurementId: "G-NL24VS1DW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;