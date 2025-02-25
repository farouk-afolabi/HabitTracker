// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDcGAwDHCHCOaU73kCYg1dkGCZ9C3XvQng",
    authDomain: "habittracker-f3cf9.firebaseapp.com",
    projectId: "habittracker-f3cf9",
    storageBucket: "habittracker-f3cf9.firebasestorage.app",
    messagingSenderId: "128819965244",
    appId: "1:128819965244:web:de90745c1aef155c73c239",
    measurementId: "G-8WNP6BBD6P"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth();

