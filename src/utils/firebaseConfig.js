// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsr89zsXUasB0KE7_eguP7MjAbVK3kb14",
  authDomain: "licenciasarg-ed05d.firebaseapp.com",
  projectId: "licenciasarg-ed05d",
  storageBucket: "licenciasarg-ed05d.appspot.com",
  messagingSenderId: "491373138438",
  appId: "1:491373138438:web:1b45473441f918d1d42987",
  measurementId: "G-FWHQ8Z9JEK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);
export default db;
