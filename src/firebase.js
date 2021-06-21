import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const  firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCwCHfz9eIZJ2GqRDeQHt7CTf5Giv-z3FU",
  authDomain: "bookify-7a0fa.firebaseapp.com",
  projectId: "bookify-7a0fa",
  storageBucket: "bookify-7a0fa.appspot.com",
  messagingSenderId: "89010419539",
  appId: "1:89010419539:web:4b3b0cef086d17684953a6",
  measurementId: "G-WZZK3L77CE"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

export default app;
