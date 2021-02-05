import React from "react";
import MealList from "../components/MealList";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const FavouritesScreen = (props) => {
  const mealState = useSelector((state) => state.meals);

  const meals = mealState.favouriteMeals.filter(
    (i) => i.id === "m1" || i.id === "m2"
  );

  if (meals.length <= 0 || !meals) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          No favourite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealList navigation={props.navigation} meals={meals} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="menu"
          title="menu"
          IconComponent={Ionicons}
          iconSize={23}
          color={Platform.OS === "android" ? "white" : Colors.primaryColor}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
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

export default FavouritesScreen;
