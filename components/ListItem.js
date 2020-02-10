import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const ListItem = ({ title, done, onToggleItem }) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ ...styles.itemText, ...(done && styles.doneItem) }}>
        {title}
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onToggleItem}>
        <Text>
          <MaterialIcon
            name={done ? "check-box" : "check-box-outline-blank"}
            size={25}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    borderBottomColor: "#a1a1a1",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  doneItem: {
    textDecorationLine: "line-through",
    opacity: 0.8
  },
  itemText: {
    fontSize: 20
  }
});

export default ListItem;
