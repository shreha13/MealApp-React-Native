import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const mealState = useSelector((state) => state.meals);

  const meals = mealState.filteredMeals.filter((i) =>
    i.categoryIds.find((a) => a === categoryId)
  );
  //const meals = x.filter(i=> i.categoryIds.indexOf(categoryId) >= 0)

  if(meals.length <= 0 ){
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          No meals under this category found. Try changing filters or choose some other category!
        </Text>
      </View>
    );
  }

  return <MealList meals={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const categoryName = CATEGORIES.find((i) => i.id === categoryId).title;

  return {
    headerTitle: categoryName,
  };
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
});

export default CategoryMealsScreen;
