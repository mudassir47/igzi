// firebase-config.js

// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjDN2loFBsVmZr3pQJGmVi1ZR3SWpeo4k",
  authDomain: "igzi-418a7.firebaseapp.com",
  projectId: "igzi-418a7",
  storageBucket: "igzi-418a7.appspot.com",
  messagingSenderId: "428960456482",
  appId: "1:428960456482:web:11690cac87a7a09320cf7b",
  measurementId: "G-8LGMW1FGS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firebase services for use in other files
export { db, auth };
