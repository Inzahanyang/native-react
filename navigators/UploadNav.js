import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function UploadNav() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          backgroundColor: "black",
        },
        activeTintColor: "dodgerblue",
        indicatorStyle: {
          backgroundColor: "dodgerblue",
          top: 0,
        },
      }}
    >
      <Tab.Screen name="Select">
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerStyle: { backgroundColor: "black", shadowOpacity: 0.3 },
              headerBackImage: ({ tintColor }) => (
                <Ionicons
                  style={{ marginLeft: 10 }}
                  name="close"
                  color={tintColor}
                  size={28}
                />
              ),
            }}
          >
            <Stack.Screen
              name="Select"
              component={SelectPhoto}
              options={{ title: "Select your Photos" }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}
