import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_9RaQCgqQAQp3UFRFEoN-Ub8maYkG7wk",
  authDomain: "projectplanner-35319.firebaseapp.com",
  databaseURL: "https://projectplanner-35319.firebaseio.com",
  projectId: "projectplanner-35319",
  storageBucket: "projectplanner-35319.appspot.com",
  messagingSenderId: "702684864473"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
