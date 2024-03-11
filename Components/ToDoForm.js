import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  return (
    <View>
      {/* <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      /> */}
      <Button style={styles.button}
        title="Add Task"
        onPress={() => {
          addTask(taskText);
          setTaskText(""); 
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
