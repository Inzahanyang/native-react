import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Room from "../screens/Room";
import Rooms from "../screens/Rooms";

const Stack = createStackNavigator();

export default function MessagesNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          shadowOpacity: "rgba(255, 255, 255, 0.3)",
          borderBottomColor: "rgba(255, 255, 255, 0.3)",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Rooms"
        component={Rooms}
        options={{
          headerBackImage: ({ tintColor }) => (
            <Ionicons
              name="chevron-down"
              color={tintColor}
              size={28}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}
