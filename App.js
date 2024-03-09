import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";

function App() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
    </SafeAreaView>
  );
}

export default App;
