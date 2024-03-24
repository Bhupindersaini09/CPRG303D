import React from "react";
import { useState } from "react";
import { View, Button, Alert } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {

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
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask}/>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
