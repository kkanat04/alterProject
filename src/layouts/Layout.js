import React from "react";
import { ScrollView, RefreshControl } from "react-native";

const Layout = ({ children, onRefresh }) => {
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />} style={{ flex: 1 }}>
      {children}
    </ScrollView>
  );
};

export default Layout;
