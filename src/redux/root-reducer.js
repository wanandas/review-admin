import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import adminReducer from "./admin/admin.reducer";
import reviewReducer from "./review/review.reducer";

const persistConfig = {
  key: "adminreview",
  storage
};

const rootReducer = combineReducers({
  form: reduxFormReducer,
  admin: adminReducer,
  review: reviewReducer
});

export default persistReducer(persistConfig, rootReducer);
