import firebase from "firebase/app";
import "firebase/firestore";

import { config } from "./firebase.config";

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
