import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import ListItem from "./components/ListItem";
import Input from "./components/Input";

const App = () => {
  const [items, setItems] = useState([]);

  const addItemHandler = value => {
    if (value) {
      setItems(currentItems => [
        ...currentItems,
        { id: Math.random().toString(), value }
      ]);
    }
  };

  const removeItemHandler = itemId => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  return (
    <View style={styles.container}>
      <Input onAdd={addItemHandler} />
      <FlatList
        keyExtractor={item => item.id}
        style={styles.list}
        data={items}
        renderItem={({ item: { id, value } }) => (
          <ListItem onDelete={removeItemHandler.bind(this, id)} title={value} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: "center"
  },
  list: {
    width: "100%",
    padding: 20
  }
});

export default App;
