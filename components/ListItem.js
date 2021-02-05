import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default ListItem;
