import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Notifications({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text
          style={{
            color: "white",
          }}
        >
          Notifications
        </Text>
      </TouchableOpacity>
    </View>
  );
}
