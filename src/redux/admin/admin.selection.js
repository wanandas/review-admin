import { createSelector } from "reselect";

const selectAdmin = state => state.admin;

export const selectCurrentUser = createSelector(
  [selectAdmin],
  admin => admin.currentUser
);
