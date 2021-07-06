import { combineReducers } from "redux";

import { allCoffeeReducer } from "./coffeeReducer";
import { GetReviewReducer } from "./reviewReducer";

export const rootReducer = combineReducers({
  coffee: allCoffeeReducer,
  getRivew: GetReviewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
