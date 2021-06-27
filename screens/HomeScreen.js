import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import HourCard from "../components/HourCard";
import Badge from "../components/Badge";

const HomeScreen = () => {
  const [weatherData, setweatherData] = useState();
  const [currentCity, setcurrentCity] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=7fc6f28f65554012a4e164744211906&q=Mumbai&days=1&aqi=no&alerts=no"
    )
      .then((response) => response.json())
      .then((json) => {
        setloading(false);
        setweatherData(json);
        setcurrentCity(json.location.name);
      });
  };

  const [loaded] = useFonts({
    CastoroRegular: require("../assets/fonts/Castoro-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const RateCard = () => {
    return (
      <View style={styles.card1}>
        <View style={styles.card1Icon}>
          <Fontisto name="star" size={21} color="#ff6a60" />
        </View>
        <View style={{ flex: 2, marginRight: 12, marginLeft: 4 }}>
          <Text style={{ fontSize: 14 }}>Rate an area</Text>
        </View>
      </View>
    );
  };

  const ShareCard = () => {
    return (
      <View style={styles.card1}>
        <View style={styles.card1Icon}>
          <MaterialCommunityIcons
            name="chat-processing"
            size={26}
            color="#ff6a60"
          />
        </View>
        <View style={{ flex: 2, marginRight: 12, marginLeft: 4 }}>
          <Text style={{ fontSize: 14 }}>Share Incident</Text>
        </View>
      </View>
    );
  };

  const InnerCard = () => {
    return (
      <View
        style={{
          flex: 6,
          marginTop: Dimensions.get("window").width > 380 ? 26 : 16,
          marginBottom: 30,
        }}
      >
        <View style={styles.innerCardContainer}>
          <View style={{ marginHorizontal: 38, marginVertical: 12 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 27,
                fontFamily: "CastoroRegular",
              }}
            >
              Rate Places for Safety and help people stay updated
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 34,
              marginBottom: 40,
              height: 66,
              flexDirection: "row",
            }}
          >
            <RateCard></RateCard>
            <ShareCard></ShareCard>
          </View>
          <View style={styles.badgeContainer}>
            <Badge initial="D" />
          </View>
          <View style={styles.bottomBadge}>
            <Ionicons name="star" size={15} color="#ffdc64" />
            <Text style={{ color: "#eae6e5", padding: 8, fontSize: 12 }}>
              334 Safety Reviews in last 24 hours
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const CardContainer = () => {
    return (
      <View style={styles.cardContainerMain}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginTop: Dimensions.get("window").width > 380 ? 45 : 30,
          }}
        >
          <Text
            style={{ paddingHorizontal: 34, fontSize: 26, color: "#0c0b0a" }}
          >
            Weather App
          </Text>
        </View>
        <InnerCard />
      </View>
    );
  };

  const ForecastContainer = () => {
    return (
      <View style={{ flex: 1 }}>
        {!loading && weatherData ? (
          <FlatList
            style={{ flex: 1, marginLeft: 12, marginVertical: 24 }}
            horizontal={true}
            data={weatherData.forecast.forecastday[0].hour}
            renderItem={({ item, index }) => (
              <HourCard item={item} index={index} name={currentCity} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#fe776f" />
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <CardContainer></CardContainer>
        </View>
        <View style={styles.forecastContainer}>
          <ForecastContainer></ForecastContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cardContainer: { flex: 12 },
  forecastContainer: { flex: 5 },
  badgeContainer: {
    position: "absolute",
    top: -10,
    left: 42,
    backgroundColor: "#fff8ee",
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  bottomBadge: {
    position: "absolute",
    bottom: -19,
    backgroundColor: "#55322c",
    height: 38,
    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    elevation: 4,
  },
  card1: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 16,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  card1Icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 14,
    marginRight: 4,
  },
  cardContainerMain: {
    backgroundColor: "#f5eadf",
    flex: 1,
    marginHorizontal: 6,
    marginVertical: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerCardContainer: {
    backgroundColor: "#fe776f",
    flex: 1,
    borderRadius: 22,
    elevation: 4,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 19,
    paddingTop: 82,
  },
});
