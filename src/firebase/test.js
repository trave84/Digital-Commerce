import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("uzsWFglTT1auKJdZRsHL")
  .collection("cart-items")
  .doc("usRvDUHsuomXj78mPo9v");

firestore.doc("/users/uzsWFglTT1auKJdZRsHL/cart-items/usRvDUHsuomXj78mPo9v");
firestore.collection("/users/uzsWFglTT1auKJdZRsHL/cart-items/");
