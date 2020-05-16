import firebase from "firebase/app"; //apenas algumas coisas essenciais da firebase
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
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
