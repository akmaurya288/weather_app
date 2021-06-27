import React from "react";
import { View, TouchableHighlight, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import GiftScreen from "./screens/GiftScreen";
import WarningScreen from "./screens/WarningScreen";
import BellScreen from "./screens/BellScreen";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconView;
            switch (route.name) {
              case "Home":
                iconView = <FontAwesome5 name="home" size={22} color={color} />;
                break;

              case "Gift":
                iconView = (
                  <Ionicons name="gift-sharp" size={23} color={color} />
                );
                break;

              case "Warning":
                iconView = (
                  <Ionicons name="ios-warning" size={26} color={color} />
                );
                break;

              case "Bell":
                iconView = (
                  <MaterialCommunityIcons name="bell" size={25} color={color} />
                );
                break;
            }

            return iconView;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#fe776f",
          inactiveTintColor: "#5a5656",
          style: {
            backgroundColor: "#140f0f",
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Gift" component={GiftScreen}></Tab.Screen>
        <Tab.Screen
          name="Add"
          component={HomeScreen}
          options={{
            tabBarButton: (props) => (
              <View style={{ justifyContent: "center" }}>
                <TouchableHighlight
                  onPress={() => {
                    Alert.alert("Add Button");
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#ff6760",
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MaterialIcons name="add" size={24} color="#ffff" />
                  </View>
                </TouchableHighlight>
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen name="Warning" component={WarningScreen}></Tab.Screen>
        <Tab.Screen name="Bell" component={BellScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
