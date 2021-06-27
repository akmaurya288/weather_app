import React from "react";
import { View, Text, Dimensions } from "react-native";

const WarningScreen = () => {
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Warning Screen</Text>
    </View>
  );
};

export default WarningScreen;
