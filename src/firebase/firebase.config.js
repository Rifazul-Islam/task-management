// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLAK8Mthsro55G8XMRau6xO3TId9E0H1g",
  authDomain: "task-management-a13f8.firebaseapp.com",
  projectId: "task-management-a13f8",
  storageBucket: "task-management-a13f8.appspot.com",
  messagingSenderId: "521349792721",
  appId: "1:521349792721:web:100c1a8056ecb3f3b496f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
