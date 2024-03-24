import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks?.map((task, index) => (
        <View style={styles.task} key={index}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
