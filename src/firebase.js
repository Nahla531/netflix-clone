import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyADexvjb7DKkfE6wJS0SlOIj9Jz4qP6LQA",
  authDomain: "netflix-clone-aa650.firebaseapp.com",
  databaseURL:
    "https://netflix-clone-aa650-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netflix-clone-aa650",
  storageBucket: "netflix-clone-aa650.appspot.com",
  messagingSenderId: "1087951252088",
  appId: "1:1087951252088:web:58021356dd2647b10f9b8d",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
