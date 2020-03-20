import { db } from "../firebase/firebase.utils";

export default (function addDoctoFirebase(obj) {
  db.collection("review")
    .add({
      genres: obj.genres,
      name: obj.name,
      img: obj.img,
      score: obj.score,
      reason: obj.reason,
      comment: obj.comment,
      logline: obj.logline,
      reviewer: obj.reviewer
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});
