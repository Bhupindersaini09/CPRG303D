import React from "react";
import { View, Text, Button } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutScreen = ({navigation}) => {

  const currentDate = new Date().toDateString();


  return (
    <MainLayout>
      <SafeAreaView>
        <Text>App: Task Manager</Text>
        <Text>Made By: Bhupinder Singh</Text>
        <Text>Current Date: {currentDate}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default AboutScreen;
