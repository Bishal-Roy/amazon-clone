import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD53dmoElOHzTfHalt_4bMyvX2-seL1n_I",
  authDomain: "clone-2c57a.firebaseapp.com",
  databaseURL: "https://clone-2c57a.firebaseio.com",
  projectId: "clone-2c57a",
  storageBucket: "clone-2c57a.appspot.com",
  messagingSenderId: "349395969801",
  appId: "1:349395969801:web:4b0df3c9533d20226615d8",
  measurementId: "G-1N97JRSMTF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
