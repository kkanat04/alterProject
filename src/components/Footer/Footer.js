import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Footer = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#fff", bottom: 0, flexDirection: "row", justifyContent: 'space-around' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>Home</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('News')}><Text>News</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}><Text>Chat</Text></TouchableOpacity>
    </View>
  );
};

export default Footer;
