import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";
import Input from "./Input";

const List = () => {
  const [items, setItems] = useState([]);

  const addItemHandler = value => {
    if (value) {
      setItems(currentItems => [
        { id: Math.random().toString(), value, done: false },
        ...currentItems
      ]);
    }
  };

  const toggleItemHandler = itemId => {
    setItems(currentItems =>
      currentItems.map(item => {
        if (item.id === itemId) {
          item = {
            ...item,
            done: item.done ? false : true
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Input onAdd={addItemHandler} />
      <FlatList
        keyExtractor={item => item.id}
        style={styles.list}
        data={items}
        renderItem={({ item: { id, value, done } }) => (
          <ListItem
            onToggleItem={toggleItemHandler.bind(this, id)}
            title={value}
            done={done}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    padding: 20
  }
});

export default List;
