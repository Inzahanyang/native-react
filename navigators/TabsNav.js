import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../components/nav/TabIcon";
import { View, Image } from "react-native";
import SharedStackNav from "./SharedStackNav";
import useMe from "../hooks/useMe";

const Tabs = createBottomTabNavigator();

export default function TabsNav() {
  const { data } = useMe();
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
          tabBarIcon: ({ color, focused }) => (
            <TabIcon iconName="home" color={color} focused={focused} />
          ),
        }}
        name="Feed"
      >
        {() => <SharedStackNav screenName="Feed" />}
      </Tabs.Screen>

      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon iconName="search" color={color} focused={focused} />
          ),
        }}
        name="Search"
      >
        {() => <SharedStackNav screenName="Search" />}
      </Tabs.Screen>

      <Tabs.Screen
        name={"Camera"}
        component={View}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("Upload");
            },
          };
        }}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName="camera" color={color} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon iconName="heart" color={color} focused={focused} />
          ),
        }}
        name="Notifications"
      >
        {() => <SharedStackNav screenName="Notifications" />}
      </Tabs.Screen>

      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, focused }) =>
            data?.me?.avatar ? (
              <Image
                source={{ uri: data.me.avatar }}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  ...(focused && { borderColor: "white", borderWidth: 1 }),
                }}
              />
            ) : (
              <TabIcon iconName="person" color={color} focused={focused} />
            ),
        }}
        name="Me"
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
