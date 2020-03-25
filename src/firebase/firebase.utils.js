import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { config } from "./firebase.config";

firebase.initializeApp(config);

export const createUserProfileDocument = async userAuth => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const converReviewSnapshotToMap = collection => {
  const transformedReview = collection.docs.map(doc => {
    const {
      comment,
      genres,
      img,
      logline,
      name,
      reason,
      reviewer,
      score
    } = doc.data();
    return {
      id: doc.id,
      comment,
      genres,
      img,
      logline,
      name,
      reason,
      reviewer,
      score
    };
  });
  return transformedReview.reduce((accumelator, collection) => {
    accumelator[collection.name] = collection;
    return accumelator;
  }, {});
};

export const deleteReviewfirebase = id => {
  db.collection("review")
    .doc(id)
    .delete();
};

export const addDoctoFirebase = obj => {
  db.collection("review")
    .doc(obj.name)
    .set({
      genres: obj.genres,
      name: obj.name,
      img: obj.img,
      score: obj.score,
      reason: obj.reason,
      comment: obj.comment,
      logline: obj.logline,
      reviewer: obj.reviewer
    })
    .then(function() {
      console.log("Document written with ID: ", obj.name);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};

export const auth = firebase.auth();

export const db = firebase.firestore();

export default firebase;
