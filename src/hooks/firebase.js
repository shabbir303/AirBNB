// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-dQ_Irs5th-T9pUPe_vyqhqJvP3rapQM",
  authDomain: "airbnb-681ee.firebaseapp.com",
  projectId: "airbnb-681ee",
  storageBucket: "airbnb-681ee.appspot.com",
  messagingSenderId: "500666880968",
  appId: "1:500666880968:web:674361d2dfce028f19a6fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);