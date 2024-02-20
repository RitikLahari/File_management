import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"
 

const firebaseConfig = {
  apiKey: "AIzaSyCCAmnG9z6hFknMvqp6F1NszqiqzxItPNM",
  authDomain: "react-firebase-file.firebaseapp.com",
  projectId: "react-firebase-file",
  storageBucket: "react-firebase-file.appspot.com",
  messagingSenderId: "1020834969113",
  appId: "1:1020834969113:web:93ab986775987fd6d11c88",
  measurementId: "G-8JT8FM7DZE"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default fire;
