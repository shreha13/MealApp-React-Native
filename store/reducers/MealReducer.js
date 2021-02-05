import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVOURITE } from "../actions/types";

const initialState = {
  meals: MEALS,
  favouriteMeals: [],
  filteredMeals: MEALS,
};

const MealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        (i) => i.id === action.mealId
      );
      var updatedFav = state.favouriteMeals;
      if (existingIndex > -1) {
        updatedFav = updatedFav.filter((i) => i.id !== action.mealId);
      } else {
        updatedFav = [
          ...updatedFav,
          { ...state.meals.find((i) => i.id === action.mealId) },
        ];
      }
      return { ...state, favouriteMeals: updatedFav };

    case SET_FILTERS:
      const updatedFlteredMeals = state.filteredMeals.filter(
        (i) =>
          i.isVegan === action.filterSettings.isVegan &&
          i.isVegetarian === action.filterSettings.isVegetarian &&
          i.isLactoseFree === action.filterSettings.isLactoseFree &&
          i.isGlutenFree === action.filterSettings.isGlutenFree
      );
      return { ...state, filteredMeals: updatedFlteredMeals };
    default:
      return state;
  }
};

export default MealReducer;
