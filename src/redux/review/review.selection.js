import { createSelector } from "reselect";

const selectReview = state => state.review;

export const selectReviewSec = createSelector(
  [selectReview],
  review => review.review
);

export const selectReviewForView = createSelector([selectReviewSec], review =>
  review ? Object.keys(review).map(key => review[key]) : []
);

export const selectReviewFetching = createSelector(
  [selectReview],
  review => review.isFetching
);
