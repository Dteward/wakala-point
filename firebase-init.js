/* ===== WAKALA POINT — Firebase Core Setup ===== */

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
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

/* ===== CONFIG ===== */
const firebaseConfig = {
  apiKey: "AIzaSyB36tCsZPPstZvojZLE6srWUVNahdzgvZw",
  authDomain: "wakala-point.firebaseapp.com",
  projectId: "wakala-point",
  storageBucket: "wakala-point.appspot.com",
  messagingSenderId: "601072568380",
  appId: "1:601072568380:web:4210c8a78610413aeddb39",
};

/* ===== INIT ===== */
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

/* ===== GLOBAL EXPORT (important) ===== */
window.__wpFirebase = {
  app,
  db,
  auth,

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

  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  onAuthStateChanged,
};

/* ===== READY EVENT ===== */
window.dispatchEvent(new Event("wp-firebase-ready"));

/* ===== RESET PASSWORD HELPER ===== */
window.resetPassword = async function (email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (e) {
    throw new Error(e.message);
  }
};
