import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MealsNavigator from "./navigation/MealsNavigator";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
