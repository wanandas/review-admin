import { all, call } from "redux-saga/effects";
import { adminSaga } from "./admin/admin.saga";
import { reviewSaga } from "./review/review.saga";

export default function* rootSaga() {
  yield all([call(adminSaga), call(reviewSaga)]);
}
