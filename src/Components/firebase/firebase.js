import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_W6Ko-OYi9YHlBqTv-KxUtIBUgFugi-A",
  authDomain: "messenger-clone-8451b.firebaseapp.com",
  databaseURL: "https://messenger-clone-8451b.firebaseio.com",
  projectId: "messenger-clone-8451b",
  storageBucket: "messenger-clone-8451b.appspot.com",
  messagingSenderId: "412101488082",
  appId: "1:412101488082:web:4d3cbfe98584be9de4ac0b",
  measurementId: "G-D1HF67WXMN",
});

const db = firebaseApp.firestore();

export default db;
