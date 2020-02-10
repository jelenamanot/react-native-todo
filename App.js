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
    paddingTop: 100,
    flex: 1,
    alignItems: "center"
  }
});

export default App;
