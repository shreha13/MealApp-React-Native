import { SET_FILTERS, TOGGLE_FAVOURITE } from "./types";

export const toggleFavourite = (id) => {
  return { type: TOGGLE_FAVOURITE, mealId: id };
};

export const setFilters = (filterSettings) => {
  return { type: SET_FILTERS, filterSettings: filterSettings };
};
