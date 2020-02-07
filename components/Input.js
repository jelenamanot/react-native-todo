import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

const Input = ({ onAdd }) => {
  const [text, setText] = useState("");

  const addHandler = () => {
    onAdd(text);
    setText("");
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        value={text}
        placeholder="What you have to do?"
        onChangeText={text => setText(text)}
        style={styles.input}
      />
      <Button title="Add" onPress={addHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "lightgrey",
    borderWidth: 1,
    width: "80%",
    padding: 10
  }
});

export default Input;
