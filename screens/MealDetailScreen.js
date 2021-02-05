import React, { useCallback, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import CustomHeaderButon from "../components/CustomHeaderButon";
import ListItem from "../components/ListItem";
import { toggleFavourite } from "../store/actions/MealsAction";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const mealState = useSelector((state) => state.meals);
  const currentMealIsFav = useSelector((state) =>
    state.meals.favouriteMeals.some((i) => i.id === mealId)
  );
 
  const meal = mealState.meals.find((i) => i.id === mealId);

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFav });
  }, [currentMealIsFav]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{meal.duration}m</Text>
        <Text>{meal.complexity}</Text>
        <Text>{meal.affordability}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((i) => {
        return <ListItem key={i}>{i}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((i) => {
        return <ListItem key={i}>{i}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: navigationData.navigation.getParam("mealTitle"),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButon}>
        <Item
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          title="Fav"
          onPress={toggleFav}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  details: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default MealDetailScreen;
