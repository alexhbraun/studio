// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk5oIWJ_ujhPF71He6LgncqAxdmM29cqQ",
  authDomain: "stridesculpt.firebaseapp.com",
  projectId: "stridesculpt",
  storageBucket: "stridesculpt.appspot.com",
  messagingSenderId: "596337424461",
  appId: "1:596337424461:web:203d266d5d4dce8d41c404",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
