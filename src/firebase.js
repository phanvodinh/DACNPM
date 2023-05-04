import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArcmiDOYeJ-1ev7p4kgBWxXDoRLV6hC_o",
  authDomain: "chat-react-9c9b0.firebaseapp.com",
  projectId: "chat-react-9c9b0",
  storageBucket: "chat-react-9c9b0.appspot.com",
  messagingSenderId: "688644726902",
  appId: "1:688644726902:web:bf1431223b9679cd2d3f57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()