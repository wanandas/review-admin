import { all, call, put, takeLatest } from "redux-saga/effects";
import { db, converReviewSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchReviewSuccess, fetchReviewFailure } from "./review.action";

import ReviewActionTypes from "./review.types";

export function* fetchReviewAsync() {
  try {
    const collectionRef = db.collection("review");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(converReviewSnapshotToMap, snapshot);
    yield put(fetchReviewSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchReviewFailure(err.message));
  }
}

export function* fetchReview() {
  yield takeLatest(ReviewActionTypes.FETCH_REVIEW_START, fetchReviewAsync);
}

export function* reviewSaga() {
  yield all([call(fetchReview)]);
}
