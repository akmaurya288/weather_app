import React from "react";
import { View, Text, Dimensions } from "react-native";
import moment from "moment";

const HourCard = ({ item, index, name }) => {
  let time = moment(item.time_epoch * 1000).format("LT");

  return (
    <View
      style={{
        flex: 1,
        width:
          Dimensions.get("window").width > 360
            ? Dimensions.get("window").width * 0.71
            : Dimensions.get("window").width * 0.9,
        marginRight: 10,
        marginVertical: 5,
        elevation: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#4fadd7",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 28, margin: 12 }}>{name}</Text>
        <Text style={{ fontSize: 22, margin: 12 }}>{time}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center", margin: 12 }}>
          <Text style={{ fontSize: 22, color: "#2d8ae5" }}>
            {item.temp_c}
            {String.fromCharCode(176)}
          </Text>
          <Text style={{ fontSize: 22 }}>Temperature</Text>
        </View>
        <View style={{ alignItems: "center", margin: 12 }}>
          <Text style={{ fontSize: 22 }}>
            {item.wind_kph}
            {String.fromCharCode(176)}
          </Text>
          <Text style={{ fontSize: 22 }}>Wind (kph)</Text>
        </View>
      </View>
    </View>
  );
};

export default HourCard;
