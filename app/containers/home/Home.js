import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, ScrollView, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import StockSearchModal from "./components/StockSearchModal";
import StockEditModal from "./components/StockEditModal";
import { loadAllStocks } from "../../redux/modules/stocks/thunkActions";
import * as $SA from "../../redux/modules/stocks/actionTypes";
import { $A } from "../../redux/helper";

export default function HomeScreen() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const allStocks = useSelector((state) => state.stocks.allStocks);
  const filteredStocks = useSelector((state) => state.stocks.filteredStocks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllStocks());
  }, []);

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
            <TouchableOpacity onPress={() => setModalVisibility(true)}>
              <EvilIcons name="plus" size={32} color={"white"}></EvilIcons>
            </TouchableOpacity>
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
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Text style={{ color: "white", fontSize: 16 }}>Total Stocks : {allStocks.length}</Text>
      </View>
      {isModalVisible && (
        <StockSearchModal
          data={filteredStocks}
          onStockSearch={(text) => dispatch($A($SA.FILTER_STOCKS, text))}
          onStockPress={(stock) => {
            setModalVisibility(false);
            setSelectedStock(stock);
          }}
          onClose={() => {
            dispatch($A($SA.RESET_FILTER));
            setModalVisibility(false);
          }}
        />
      )}
      {selectedStock && (
        <StockEditModal
          stock={selectedStock}
          onClose={() => {
            dispatch($A($SA.RESET_FOUND_STOCK));
            setSelectedStock(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}
