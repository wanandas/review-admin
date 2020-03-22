import AdminActionTypes from "./admin.types";

const INITAL_STATE = {
  currentUser: null,
  err: null
};

const adminReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case AdminActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    case AdminActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        err: null
      };
    case AdminActionTypes.SIGN_IN_FAILURE:
    case AdminActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
