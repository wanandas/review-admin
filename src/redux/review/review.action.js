import ReviewActionTypes from "./review.types";
import { db, converReviewSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchReviewStart = reviewMap => ({
  type: ReviewActionTypes.FETCH_REVIEW_START
});

export const fetchReviewSuccess = reviewMap => ({
  type: ReviewActionTypes.FETCH_REVIEW_SUCCESS,
  payload: reviewMap
});

export const fetchReviewFailure = errMessage => ({
  type: ReviewActionTypes.FETCH_REVIEW_FAILURE,
  payload: errMessage
});

export const deleteReview = id => ({
  type: ReviewActionTypes.DELETE_REVIEW,
  payload: id
});

export const fetchReviewStaryAsync = () => {
  return dispatch => {
    const collectionRef = db.collection("review");
    dispatch(fetchReviewStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = converReviewSnapshotToMap(snapshot);
        dispatch(fetchReviewSuccess(collectionMap));
      })
      .catch(err => dispatch(fetchReviewFailure(err.message)));
  };
};
