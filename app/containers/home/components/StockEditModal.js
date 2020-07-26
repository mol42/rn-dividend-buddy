import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Button } from "react-native";
import Modal from "react-native-modal";
import * as $SA from "../../../redux/modules/stocks/actionTypes";
import { $A } from "../../../redux/helper";

export default function StockEditModal(props) {
  const { stock } = props;
  const selectedStockInfo = useSelector((state) => state.stocks.selectedStockInfo);
  const addedStocks = useSelector((state) => state.stocks.addedStocks);
  const [stockCount, setStockCount] = useState(selectedStockInfo ? selectedStockInfo.count : 0);
  const dispatch = useDispatch();

  return (
    <Modal isVisible={true} style={{ margin: 0, backgroundColor: "black" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", height: 60, padding: 10 }}>
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
        <View style={{ flex: 1 }}>
          <View style={{ padding: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 48, fontWeight: "bold", color: "#318d71" }}>{stock && stock.ticker}</Text>
          </View>
          <View style={{ paddingLeft: 10, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 16, color: "white", marginBottom: 20 }}>{stock && stock.name}</Text>
          </View>
          <View style={{ paddingLeft: 10, justifyContent: "center", alignItems: "center" }}>
            <TextInput
              style={{
                width: 200,
                height: 40,
                padding: 5,
                backgroundColor: "#1c1c1e",
                borderRadius: 10,
                color: "white",
                fontSize: 14,
              }}
              keyboardType={"decimal-pad"}
              value={String(stockCount)}
              onChangeText={(text) => setStockCount(text)}
            ></TextInput>
            <View style={{ padding: 10, justifyContent: "center", alignItems: "center" }}>
              <Button
                title="Save changes"
                onPress={() => {
                  dispatch(
                    $A($SA.ADD_OR_EDIT_STOCK_TO_SELECTED, {
                      stock: props.stock,
                      count: Number(stockCount),
                    })
                  );
                  props.onClose();
                }}
              ></Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
