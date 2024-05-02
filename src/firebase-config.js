
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWrnvkjWvTKDWpsyowQQWxc-95PyqR_yM",
  authDomain: "my-books-store-78d43.firebaseapp.com",
  projectId: "my-books-store-78d43",
  storageBucket: "my-books-store-78d43.appspot.com",
  messagingSenderId: "121790711274",
  appId: "1:121790711274:web:78ef5fa83d174106b9de93",
  measurementId: "G-ME02R15WF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);