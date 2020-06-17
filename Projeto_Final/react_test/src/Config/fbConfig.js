import firebase from "firebase/app"; //apenas algumas coisas essenciais da firebase
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DB_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyC9-tfJR-pJr9H5OG81Nqd4nSJe-RsEyik",
  authDomain: "utentes.firebaseapp.com",
  databaseURL: "https://utentes.firebaseio.com",
  projectId: "utentes",
  storageBucket: "utentes.appspot.com",
  messagingSenderId: "707164907949",
  appId: "1:707164907949:web:9da040deb2c85503739924",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
