import * as React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const user = useSelector((state) => state.profile.user);
  const { name } = user;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{name}</Text>
    </View>
  );
}
