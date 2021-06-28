import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCjWLSmbYMgGDag4OJnpf8n8EZpTC_lZiU",
    authDomain: "todo-react-p1.firebaseapp.com",
    projectId: "todo-react-p1",
    storageBucket: "todo-react-p1.appspot.com",
    messagingSenderId: "536275047073",
    appId: "1:536275047073:web:9263094ea5c7221bf596e0",
    measurementId: "G-FZP7DYBWJZ"
});

const db = firebaseApp.firestore();

export default db;