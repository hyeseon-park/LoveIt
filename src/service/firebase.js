// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCokGSJ5QkopmAPfeGmezglolq5zDd6L7M",
  authDomain: "loveit-a1ff5.firebaseapp.com",
  databaseURL: "https://loveit-a1ff5-default-rtdb.firebaseio.com",
  projectId: "loveit-a1ff5",
  storageBucket: "loveit-a1ff5.appspot.com",
  messagingSenderId: "673541352575",
  appId: "1:673541352575:web:1fe5923f762b638244a34a",
  measurementId: "G-S9L9SL2V1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);