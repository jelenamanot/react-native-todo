import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ListItem = ({ title, done, onToggleItem, onDeleteItem }) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ ...styles.itemText, ...(done && styles.doneItem) }}>
        {title}
      </Text>
      <View style={styles.itemActions}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onToggleItem}
          style={styles.toggleItem}
        >
          <MaterialIcons
            color="mediumblue"
            name={done ? "check-box" : "check-box-outline-blank"}
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={onDeleteItem}>
          <MaterialIcons name="close" size={25} />
        </TouchableOpacity>
      </View>
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
  },
  itemActions: {
    flexDirection: "row"
  },
  toggleItem: { marginRight: 10 }
});

export default ListItem;
