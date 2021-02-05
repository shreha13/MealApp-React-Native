import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Filters from "../components/Filters";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/MealsAction";

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const filters = {
      isVegan: isVegan,
      isVegetarian: isVegetarian,
      isLactoseFree: isLactoseFree,
      isGlutenFree: isGlutenFree,
    };
    dispatch(setFilters(filters));
  }, [isVegan, isVegetarian, isLactoseFree, isGlutenFree]);

  useEffect(() => {
    props.navigation.setParams({ saveFilters: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <Filters
        text="Gluten-Free"
        value={isGlutenFree}
        onChange={() => setIsGlutenFree((prevState) => !prevState)}
      />
      <Filters
        text="Lactose-Free"
        value={isLactoseFree}
        onChange={() => setIsLactoseFree((prevState) => !prevState)}
      />
      <Filters
        text="Vegan"
        value={isVegan}
        onChange={() => setIsVegan((prevState) => !prevState)}
      />
      <Filters
        text="Vegetarian"
        value={isVegetarian}
        onChange={() => setIsVegetarian((prevState) => !prevState)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters!",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="menu"
          title="menu"
          IconComponent={Ionicons}
          iconSize={23}
          color={Platform.OS === "android" ? "white" : Colors.accentColor}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="ios-save"
          iconSize={22}
          title="Save"
          IconComponent={Ionicons}
          color={Platform.OS === "android" ? "white" : Colors.accentColor}
          onPress={navData.navigation.getParam("saveFilters")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    margin: 20,
    textAlign: "center",
  },
});

export default FiltersScreen;
