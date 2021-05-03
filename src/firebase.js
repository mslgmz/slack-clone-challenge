import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFTVrkFo8bwJnHM_hylz2600odCHLsSLM",
  authDomain: "dreamit-1499541266085.firebaseapp.com",
  projectId: "dreamit-1499541266085",
  storageBucket: "dreamit-1499541266085.appspot.com",
  messagingSenderId: "80021804225",
  appId: "1:80021804225:web:71782fe31466af3b68b040",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
