import * as React from "react";
import { useSelector } from "react-redux";
import { Text, View, ScrollView, FlatList } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function HomeScreen() {
  const user = useSelector((state) => state.profile.user);
  const { name } = user;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 44, backgroundColor: "#2fc192" }}>
        <View style={{ height: 60, flexDirection: "row" }}>
          <View style={{ width: 40, height: 60 }}></View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              Dividend Income Summary
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EvilIcons size={24} color={"white"}></EvilIcons>
          </View>
        </View>
        <View
          style={{ height: 80, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Annually
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            --
          </Text>
        </View>
        <View style={{ height: 80, flexDirection: "row" }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              Monthly
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              --
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              Daily
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              --
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <FlatList
          style={{ flex: 1 }}
          data={[1, 2, 3]}
          keyExtractor={(item) => "key" + item}
          renderItem={() => (
            <View key={"item0"}>
              <Text style={{ color: "white" }}>Test</Text>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
