import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";

const MealList = ({ meals, navigation }) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);

  const renderMealItem = (itemData) => {
    const isFav = favMeals.some((i) => i.id === itemData.item.id);
    return (
      <MealItem
        item={itemData.item}
        navigateToMealDetails={() =>
          navigateToMealDetails(itemData.item.id, itemData.item.title, isFav)
        }
      />
    );
  };

  const navigateToMealDetails = (id, title, isFav) => {
    navigation.navigate("MealDetail", {
      mealId: id,
      mealTitle: title,
      isFav: isFav,
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={meals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
