import React from "react";
import { View, Text, Dimensions } from "react-native";

const BellScreen = () => {
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Bell Screen</Text>
    </View>
  );
};

export default BellScreen;
