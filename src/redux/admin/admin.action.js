import AdminActionTypes from "./admin.types";

export const signInSuccess = user => ({
  type: AdminActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = err => ({
  type: AdminActionTypes.SIGN_IN_FAILURE,
  payload: err
});

export const signInStart = emailAndPass => ({
  type: AdminActionTypes.SIGN_IN_START,
  payload: emailAndPass
});

export const checkUserSession = () => ({
  type: AdminActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: AdminActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: AdminActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = err => ({
  type: AdminActionTypes.SIGN_OUT_FAILURE,
  payload: err
});
