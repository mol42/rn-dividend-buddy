import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function StockSearchModal(props) {
  return (
    <Modal isVisible={true} style={{ margin: 0, backgroundColor: "black" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", height: 60, padding: 10 }}>
          <TextInput
            style={{ flex: 1, padding: 5, backgroundColor: "#1c1c1e", borderRadius: 10, color: "white", fontSize: 14 }}
            onChangeText={() => {}}
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
        <View style={{ flex: 1, backgroundColor: "#1c1c1e" }}></View>
      </SafeAreaView>
    </Modal>
  );
}
