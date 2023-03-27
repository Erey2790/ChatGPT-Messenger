import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANf55l0zHm3Y05vqBbiWyoptHn6fz-JZg",
  authDomain: "chatgpt-messenger-ec147.firebaseapp.com",
  projectId: "chatgpt-messenger-ec147",
  storageBucket: "chatgpt-messenger-ec147.appspot.com",
  messagingSenderId: "868690961842",
  appId: "1:868690961842:web:67fddc369250868fa270ab"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };