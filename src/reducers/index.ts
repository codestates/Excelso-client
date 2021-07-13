import { combineReducers } from "redux";

import { allCoffeeReducer } from "./coffeeReducer";
import { GetReviewReducer } from "./reviewReducer";
import loginReducer from "./loginReducer";
import { UserGetReviewReducer } from "./reviewReducer";
// import userReducer from "./userInfo";
export const rootReducer = combineReducers({
  coffee: allCoffeeReducer,
  getRivew: GetReviewReducer,
  loginReducer,
  UserGetReviewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
