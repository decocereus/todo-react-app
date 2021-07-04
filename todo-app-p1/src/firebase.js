import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "get your own from firebase",
  authDomain: "todo-react-p1.firebaseapp.com",
  projectId: "todo-react-p1",
  storageBucket: "todo-react-p1.appspot.com",
  messagingSenderId: "00000000",
  appId: "ooooooo",
  measurementId: "sssssssss",
});

const db = firebaseApp.firestore();

export default db;
