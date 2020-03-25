import ReviewActionTypes from "./review.types";

const INTIAL_STATE = {
  review: null,
  isFetch: false,
  errMessage: undefined
};

const reviewReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ReviewActionTypes.FETCH_REVIEW_START:
      return {
        ...state,
        isFetch: true
      };
    case ReviewActionTypes.FETCH_REVIEW_SUCCESS:
      return {
        ...state,
        review: action.payload,
        isFetch: false
      };
    case ReviewActionTypes.FETCH_REVIEW_FAILURE:
      return {
        ...state,
        errMessage: action.payload
      };
    case ReviewActionTypes.DELETE_REVIEW:
      return {
        ...state,
        review: state.review
      };
    default:
      return state;
  }
};

export default reviewReducer;
