import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB88JDnJ8WyUkI3zJO1Ss0tXhgblduxZsU",
  authDomain: "chat-react-9d058.firebaseapp.com",
  projectId: "chat-react-9d058",
  storageBucket: "chat-react-9d058.appspot.com",
  messagingSenderId: "655651548188",
  appId: "1:655651548188:web:d1efd375fcc580132bc3d9"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
