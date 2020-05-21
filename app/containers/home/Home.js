import * as React from "react";
import { useSelector } from "react-redux";
import { Text, View, ScrollView, FlatList, SafeAreaView } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function HomeScreen() {
  const user = useSelector((state) => state.profile.user);
  const { name } = user;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2fc192" }}>
      <View style={{ backgroundColor: "#2fc192" }}>
        <View style={{ height: 50, flexDirection: "row" }}>
          <View style={{ width: 60, justifyContent: "center", alignItems: "center" }}>
            <FontAwesome5 name="chart-pie" size={24} color={"white"}></FontAwesome5>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Dividend Income</Text>
          </View>
          <View style={{ width: 60, justifyContent: "center", alignItems: "center" }}>
            <EvilIcons name="plus" size={32} color={"white"}></EvilIcons>
          </View>
        </View>

        <View style={{ height: 90, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: "white" }}>Annually</Text>
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>--</Text>
        </View>
        <View style={{ height: 90, flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>Monthly</Text>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>--</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>Daily</Text>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>--</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "black" }}></View>
    </SafeAreaView>
  );
}
