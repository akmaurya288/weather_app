import React from "react";
import { View, Text, Dimensions, Button } from "react-native";

const GiftScreen = () => {
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Gift Screen</Text>
    </View>
  );
};

export default GiftScreen;
