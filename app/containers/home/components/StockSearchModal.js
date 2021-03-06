import React from "react";
import { View, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

const StockItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ padding: 5, borderBottomColor: "black", borderBottomWidth: 0.5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#318d71" }}>{props.ticker}</Text>
        <Text style={{ fontSize: 16, color: "white" }}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function StockSearchModal(props) {
  return (
    <Modal isVisible={true} style={{ margin: 0, backgroundColor: "black" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", height: 60, padding: 10 }}>
          <TextInput
            style={{ flex: 1, padding: 5, backgroundColor: "#1c1c1e", borderRadius: 10, color: "white", fontSize: 14 }}
            onChangeText={props.onStockSearch}
          ></TextInput>
          <TouchableOpacity
            style={{
              width: 80,
              height: 40,
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={props.onClose}
          >
            <Text style={{ color: "#318d71", fontSize: 18 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: "#1c1c1e" }}>
          <FlatList
            data={props.data}
            keyExtractor={(item) => item.ticker}
            renderItem={({ item }) => (
              <StockItem ticker={item.ticker} name={item.name} onPress={() => props.onStockPress(item)} />
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
