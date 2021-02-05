import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Colors from "../constants/Colors";

const Filters = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.text}</Text>
      <Switch
        trackColor={{ true: Colors.accentColor }}
        thumbColor="white"
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10
  },
});

export default Filters;
