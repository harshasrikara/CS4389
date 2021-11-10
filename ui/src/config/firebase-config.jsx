// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAIo0YY3GPrPImICqaN9T07i-1NI5ZKgRk",
  authDomain: "cs4389-security.firebaseapp.com",
  projectId: "cs4389-security",
  storageBucket: "cs4389-security.appspot.com",
  messagingSenderId: "675311175551",
  appId: "1:675311175551:web:8a4ea25d1dc63b8d5a3c4a"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();


export const auth = firebase.auth();
export default firebase; 