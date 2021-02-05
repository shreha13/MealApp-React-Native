import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const MealItem = ({ item, navigateToMealDetails }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={navigateToMealDetails}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: item.imageUrl }}
            >
              <Text style={styles.title}>{item.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{item.duration}m</Text>
            <Text>{item.complexity}</Text>
            <Text>{item.affordability}</Text>
          </View>
        </View>

        {/* <View style={styles.mealRow}>
          <Image source={item.imageUrl} />
        </View> */}
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    width: "90%",
    height: 200,
    margin: 15,
    backgroundColor: "#ccc",
    overflow: "hidden",
    borderRadius: 10,
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  },
});

export default MealItem;
