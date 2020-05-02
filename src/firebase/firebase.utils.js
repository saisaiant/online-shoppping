import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyARSvDBmZ69QPvLQBSwuGKMkWA-4FevOyc",
  authDomain: "online-shopping-40c35.firebaseapp.com",
  databaseURL: "https://online-shopping-40c35.firebaseio.com",
  projectId: "online-shopping-40c35",
  storageBucket: "online-shopping-40c35.appspot.com",
  messagingSenderId: "506265778612",
  appId: "1:506265778612:web:e1807b12701d9c35595ae1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
