import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
// import {useNavigate} from "react-router-dom";
// console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_AP_ID,
  // apiKey: "AIzaSyBVR15L1TnOpz5hBZAFZneZ_M940E_61ts",
  // authDomain: "react-firebase-authentic-8c851.firebaseapp.com",
  // projectId: "react-firebase-authentic-8c851",
  // storageBucket: "react-firebase-authentic-8c851.appspot.com",
  // messagingSenderId: "950890087245",
  // appId: "1:950890087245:web:0a259bd4460d71f6caad04",
};
export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);

