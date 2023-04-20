import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7NeKpLL4P42hFpYE_i58pCqWzyMayOHA",
  authDomain: "whatsapp-clone-ac72d.firebaseapp.com",
  projectId: "whatsapp-clone-ac72d",
  storageBucket: "whatsapp-clone-ac72d.appspot.com",
  messagingSenderId: "989095961614",
  appId: "1:989095961614:web:ee95b70a9d0c385473c85f",
  measurementId: "G-B616Y2ERN7"
}

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
