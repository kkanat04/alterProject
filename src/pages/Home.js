import React from "react";
import { Text } from "react-native";
import Layout from "../layouts/Layout";

const Home = () => {

  function onRefesh() {
    console.log('hello');
  }

  return (
    <Layout onRefresh={onRefesh}>
    <Text>Home</Text>
    </Layout>

  );
};

export default Home;
