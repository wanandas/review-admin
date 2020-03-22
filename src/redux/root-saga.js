import { all, call } from "redux-saga/effects";
import { adminSaga } from "./admin/admin.saga";

export default function* rootSaga() {
  yield all([call(adminSaga)]);
}
