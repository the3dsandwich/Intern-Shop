import firebaseConfig from "../key/key";
import firebase from "firebase";

const database = firebase.initializeApp(firebaseConfig).database();

export default database;
