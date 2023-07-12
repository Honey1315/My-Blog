// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6m2S9AYmZ2geFRigsh-a4TizxTkUd_cQ",
  authDomain: "myblog-6f20d.firebaseapp.com",
  projectId: "myblog-6f20d",
  storageBucket: "myblog-6f20d.appspot.com",
  messagingSenderId: "160102063803",
  appId: "1:160102063803:web:6a8704d4fc1ebce735139e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db,auth,provider};
