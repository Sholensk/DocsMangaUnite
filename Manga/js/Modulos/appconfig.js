// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_AuTHjv_4BHp7nrA4zare5iDUnZZ7o7o",
    authDomain: "manga-ab049.firebaseapp.com",
    projectId: "manga-ab049",
    storageBucket: "manga-ab049.appspot.com",
    messagingSenderId: "466377487823",
    appId: "1:466377487823:web:ef903103dfa4b605c58eba",
    measurementId: "G-79WGS72EPJ"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
