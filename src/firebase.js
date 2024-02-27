// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirebase } from "react-redux-firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_zvhLCf0n77a9q8W5uZbF9AlVXHiJBZA",
  authDomain: "fb-crud-b0428.firebaseapp.com",
  databaseURL: "https://fb-crud-b0428-default-rtdb.firebaseio.com",
  projectId: "fb-crud-b0428",
  storageBucket: "fb-crud-b0428.appspot.com",
  messagingSenderId: "765246762337",
  appId: "1:765246762337:web:3787b0b1df510c5368a920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirebase(app);