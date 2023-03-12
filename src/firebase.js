import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBv2SAvtBerx2BTuy6pJl5CuOKAxZYdXnA",
  authDomain: "login-14802.firebaseapp.com",
  projectId: "login-14802",
  storageBucket: "login-14802.appspot.com",
  messagingSenderId: "375339521207",
  appId: "1:375339521207:web:2fd885076ac81a9e586932",
  measurementId: "G-9PX6DZ02X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};