/* ===== Wakala Point — Firebase Initialization (Auth + Realtime Database) ===== */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  update,
  get,
  child,
  query,
  orderByChild,
  equalTo,
  onValue,
  off,
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB36tCsZPPstZvojZLE6srWUVNahdzgvZw",
  authDomain: "wakala-point.firebaseapp.com",
  projectId: "wakala-point",
  storageBucket: "wakala-point.firebasestorage.app",
  messagingSenderId: "601072568380",
  appId: "1:601072568380:web:4210c8a78610413aeddb39",
  measurementId: "G-D085CTF9C7"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Expose what wakala.js (a plain, non-module script) needs on window,
// since wakala.js loads as a classic script and this file loads as a module.
window.__wpFirebase = {
  db,
  ref,
  push,
  set,
  update,
  get,
  child,
  query,
  orderByChild,
  equalTo,
  onValue,
  off,
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
};

// Let other scripts know Firebase is ready (wakala.js waits for this).
window.dispatchEvent(new Event("wp-firebase-ready"));

