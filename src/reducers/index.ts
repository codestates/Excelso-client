import { combineReducers } from "redux";

import { allCoffeeReducer } from "./coffeeReducer";
import { GetReviewReducer } from "./reviewReducer";
import loginReducer from "./loginReducer";
export const rootReducer = combineReducers({
  coffee: allCoffeeReducer,
  getRivew: GetReviewReducer,
  loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
