import { takeLatest, put, all, call } from "redux-saga/effects";

import AdminActionTypes from "./admin.types";

import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess
} from "./admin.action";

import {
  auth,
  getCurrentUser,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(AdminActionTypes.SIGN_IN_START, signIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* onCheckUserSession() {
  yield takeLatest(AdminActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(AdminActionTypes.SIGN_OUT_START, signOut);
}

export function* adminSaga() {
  yield all([
    call(onSignInStart),
    call(onSignOutStart),
    call(isUserAuthenticated)
  ]);
}
