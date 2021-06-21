import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text, View, Button } from "react-native";
import { isLoggedInVar } from "../apollo";

export default function Feed() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Hello</Text>
      <Button
        onPress={async () => {
          await AsyncStorage.removeItem("token");
          isLoggedInVar(false);
        }}
        title="logout"
      />
    </View>
  );
}
