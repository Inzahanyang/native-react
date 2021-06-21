import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import TabIcon from "../components/nav/TabIcon";
import { View } from "react-native";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        showLabel: false,
        style: {
          borderTopColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabIcon iconName={"home"} color={color} focused={focused} />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabIcon iconName={"search"} color={color} focused={focused} />
          ),
        }}
        name="Search"
        component={Search}
      />

      <Tabs.Screen
        name={"Camera"}
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"camera"} color={color} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabIcon iconName={"heart"} color={color} focused={focused} />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabIcon iconName={"person"} color={color} focused={focused} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tabs.Navigator>
  );
}
