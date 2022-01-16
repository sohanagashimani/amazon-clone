// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9


const firebaseConfig = {
  apiKey: "AIzaSyB4KHaU7ULNee1KseruXVfwvBRGyrvmeqI",
  authDomain: "clone-react-332c7.firebaseapp.com",
  projectId: "clone-react-332c7",
  storageBucket: "clone-react-332c7.appspot.com",
  messagingSenderId: "205823281819",
  appId: "1:205823281819:web:27d45da5769d8ea8e5943e",
  measurementId: "G-TFNPPVGVJ6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
