import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Footer from "../components/Footer/Footer";
import StackNavigator from "./Stack";


const Tab = createBottomTabNavigator();

const TabFooter = () => {
  return (<Tab.Navigator tabBar={props => <Footer {...props} />}>
    <Tab.Screen name={"StackNavigator"} component={StackNavigator} options={{ headerShown: false }} />
  </Tab.Navigator>);
};

export default TabFooter;
