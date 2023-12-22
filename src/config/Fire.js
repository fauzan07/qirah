import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");
require("firebase/storage")

const config = {

  apiKey: "AIzaSyAFNx60JgSx_4ZW2IeIZ5WnMXcMc-SsIUY",
  authDomain: "qirah-dashboard.firebaseapp.com",
  databaseURL: "https://qirah-dashboard-default-rtdb.firebaseio.com",
  projectId: "qirah-dashboard",
  storageBucket: "qirah-dashboard.appspot.com",
  messagingSenderId: "769306784594",
  appId: "1:769306784594:web:758647bca6d46db1ca808b",
  measurementId: "G-LFXRG8NZDD"

};

const fire = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();

export default fire;