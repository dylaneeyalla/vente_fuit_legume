import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ShopScreen from "./screens/ShopScreen";

export default function App(){
  return(
    <View style={styles.container}>
      <HomeScreen />
      {/* <DetailScreen /> */}
      {/* <ShopScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});