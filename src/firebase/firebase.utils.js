import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTdh6P_unWfNDG6KRB8QILgCy_WEORbCM",
  authDomain: "digital-commerce-db.firebaseapp.com",
  databaseURL: "https://digital-commerce-db.firebaseio.com",
  projectId: "digital-commerce-db",
  storageBucket: "digital-commerce-db.appspot.com",
  messagingSenderId: "200145763117",
  appId: "1:200145763117:web:9623ea66494d459dd331a4",
  measurementId: "G-FTRKRQ33BK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error crerting user:", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
