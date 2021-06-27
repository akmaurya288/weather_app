import React from "react";
import { View, Text, Image } from "react-native";

const Badge = ({ initial }) => {
  return (
    <View
      style={{
        backgroundColor: "#6f97ff",
        width: 73,
        height: 73,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "#fff8ee",
        }}
      >
        {initial}
      </Text>
      <View
        style={{
          position: "absolute",
          bottom: -10,
          height: 24,
          width: 88,
          backgroundColor: "#55322c",
          borderRadius: 4,
          justifyContent: "center",
          elevation: 4,
        }}
      >
        <Image
          source={require("../assets/icons8-star-96.png")}
          style={{
            position: "absolute",
            top: -6.5,
            alignSelf: "center",
            width: 13,
            height: 13,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 11,
            color: "#fff8ee",
            textAlign: "center",
          }}
        >
          WARRIOR
        </Text>
      </View>
    </View>
  );
};

export default Badge;
