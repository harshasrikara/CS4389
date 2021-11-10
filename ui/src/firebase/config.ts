
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<INSERT VALUE>",
  authDomain: "<INSERT VALUE>",
  projectId: "<INSERT VALUE>",
  storageBucket: "<INSERT VALUE>",
  messagingSenderId: "<INSERT VALUE>",
  appId: "<INSERT VALUE>",
  measurementId: "<INSERT VALUE>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { getAuth, signInWithEmailAndPassword } ;