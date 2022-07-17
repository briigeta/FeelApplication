import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Entries = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.sqaure}></TouchableOpacity>
        <Text style={styles.itemText}> {props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: " center",
    flexWrap: "wrap",
  },

  sqaure: {
    width: 24,
    height: 24,
    backgroundColor: "#9cc0e7",
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: "80%",
    color: "black",
  },
});
export default Entries;
