import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDAU2hPKXW1cjS5oOALpDhH_xxkBEzVs-s",
    authDomain: "react-redux-firebase-666a1.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-666a1.firebaseio.com",
    projectId: "react-redux-firebase-666a1",
    storageBucket: "react-redux-firebase-666a1.appspot.com",
    messagingSenderId: "687200999018",
    appId: "1:687200999018:web:5825920557746b3561dc13",
    measurementId: "G-62ZNS7VQX4"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;