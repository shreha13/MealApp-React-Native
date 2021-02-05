import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
} from "react-native";

const CategoryGridTile = ({ itemData, navigateToMeals }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{ flex: 1 }}
        onPress={() => navigateToMeals(itemData)}
      >
        <View
          style={{
            ...styles.appContainer,
            backgroundColor: itemData.item.color,
          }}
        >
          <Text numberOfLines={2} style={styles.text}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 13,
  },
  appContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 10,

    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "right",
  },
});

export default CategoryGridTile;
