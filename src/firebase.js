//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTDH6pSWlBuO7Q_XBh14MMU6my1T7zvv4",
  authDomain: "disney-clone-f3756.firebaseapp.com",
  projectId: "disney-clone-f3756",
  storageBucket: "disney-clone-f3756.appspot.com",
  messagingSenderId: "78264956760",
  appId: "1:78264956760:web:5b58692104d2d31466572d",
  measurementId: "G-JMEMR15KEB"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, signInWithPopup, signOut, onAuthStateChanged};
export { db };
//export default db;