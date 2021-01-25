import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmKVMs10Ox2Gtd_0RNeuASAfK5SR8TrOc",
  authDomain: "e-clone-41462.firebaseapp.com",
  projectId: "e-clone-41462",
  storageBucket: "e-clone-41462.appspot.com",
  messagingSenderId: "17960383713",
  appId: "1:17960383713:web:1ca4b5e5d537316d1833a0",
  measurementId: "G-33SSSKPD48",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth}