import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

const Input = ({ onAdd }) => {
  const [text, setText] = useState("");

  const addHandler = () => {
    onAdd(text);
    setText("");
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        value={text}
        placeholder="What you have to do?"
        onChangeText={text => setText(text)}
        style={styles.input}
      />
      <Button title="Add" onPress={addHandler} disabled={!text} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "column",
    width: "100%"
  },
  input: {
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20
  }
});

export default Input;
