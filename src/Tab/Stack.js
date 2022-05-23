import React from "react";
import Home from "../pages/Home";
import News from "../pages/News";
import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "../components/Chat/Chat";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
