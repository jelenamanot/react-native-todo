import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, AsyncStorage, Button } from "react-native";
import ListItem from "./ListItem";
import Input from "./Input";

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("todoItems").then(itemsFromStorage => {
      itemsFromStorage ? setItems(JSON.parse(itemsFromStorage)) : [];
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const addItemHandler = value => {
    if (value) {
      setItems([
        { id: Math.random().toString(), value, done: false },
        ...items
      ]);
    }
  };

  const toggleItemHandler = itemId => {
    setItems(
      items.map(item => {
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

  const clearItemHandler = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const clearAllHandler = () => {
    AsyncStorage.clear();
    setItems([]);
  };

  return (
    <>
      <Input onAdd={addItemHandler} />
      <Button
        title="Clear All"
        style={styles.clearAll}
        color="red"
        onPress={clearAllHandler}
        disabled={!items.length}
      />
      <FlatList
        keyExtractor={item => item.id}
        style={styles.list}
        data={items}
        renderItem={({ item: { id, value, done } }) => (
          <ListItem
            onToggleItem={toggleItemHandler.bind(this, id)}
            onDeleteItem={clearItemHandler.bind(this, id)}
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
    width: "100%"
  },
  clearAll: {
    color: "red",
    margin: 10
  }
});

export default List;
