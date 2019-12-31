// @flow

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYkPvmFBQ0rt5X4cTpycAs3WqYRwOBDqs",
  authDomain: "isomorphic-react-7a4d5.firebaseapp.com",
  databaseURL: "https://isomorphic-react-7a4d5.firebaseio.com",
  projectId: "isomorphic-react-7a4d5",
  storageBucket: "isomorphic-react-7a4d5.appspot.com",
  messagingSenderId: "949287044866",
  appId: "1:949287044866:web:45cdc1dcbd12bf5970a41b",
  measurementId: "G-6VBY0BYJ3T"
};
// Initialize Firebase
const firebaseInstance = firebase.initializeApp(firebaseConfig);


export const auth = firebaseInstance.auth();
export const firestore = firebaseInstance.firestore();
