import { combineReducers } from "redux";
import MealReducer from "./MealReducer";

const rootReducer = combineReducers({
  meals: MealReducer,
});

export default rootReducer;
