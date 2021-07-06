import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Profile({ navigation, route }) {
  useEffect(() => {
    if (route?.params?.username) {
      navigation.setOptions({
        title: route.params.username.toUpperCase(),
      });
    }
  }, []);
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        someone's profile
      </Text>
    </View>
  );
}
