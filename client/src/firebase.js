// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog2-bc7fb.firebaseapp.com",
  projectId: "mern-blog2-bc7fb",
  storageBucket: "mern-blog2-bc7fb.appspot.com",
  messagingSenderId: "618528486073",
  appId: "1:618528486073:web:179a7461616a35ea51e168"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);