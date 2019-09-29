import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTdh6P_unWfNDG6KRB8QILgCy_WEORbCM",
  authDomain: "digital-commerce-db.firebaseapp.com",
  databaseURL: "https://digital-commerce-db.firebaseio.com",
  projectId: "digital-commerce-db",
  storageBucket: "",
  messagingSenderId: "200145763117",
  appId: "1:200145763117:web:9623ea66494d459dd331a4",
  measurementId: "G-FTRKRQ33BK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
