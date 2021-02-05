import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  const navigateToMeals = (itemData) => {
    props.navigation.navigate("CategoryMeals", {
      categoryId: itemData.item.id,
    });
  };
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile itemData={itemData} navigateToMeals={navigateToMeals} />
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
