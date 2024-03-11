import React, { useState } from "react";
import { SafeAreaView, Alert } from "react-native";
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk Dog"]);

  const addTask = () => {
    Alert.prompt("Add a new task", "", (taskText) => {
      if (taskText && !tasks.includes(taskText)) {
        // Check if the task doesn't already exist
        setTasks([...tasks, taskText]);
      } else if (taskText) {
        Alert.alert("Task already exists!");
      }
    });
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
