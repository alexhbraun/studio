// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: Replace the placeholder values with your actual Firebase project configuration.
// You can find this in your Firebase project settings under "Your apps" > "SDK setup and configuration" > "Config".
const firebaseConfig: FirebaseOptions = {
  apiKey: "YOUR_API_KEY", // Replace with your API Key
  authDomain: "stridesculpt.firebaseapp.com",
  projectId: "stridesculpt",
  storageBucket: "stridesculpt.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your Messaging Sender ID
  appId: "YOUR_APP_ID" // Replace with your App ID
};

// This is a check to see if you have replaced the placeholder API key.
// If you see this message in your server logs, it means you still need to add your credentials.
if (firebaseConfig.apiKey === "YOUR_API_KEY") {
  console.warn("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.warn("!!! Firebase is not configured. Please add your API Key to src/lib/firebase.ts !!!");
  console.warn("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
