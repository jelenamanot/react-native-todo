import React from "react";
import { StyleSheet, View } from "react-native";
import List from "./components/List";

const App = () => {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20
  }
});

export default App;
