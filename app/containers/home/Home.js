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

const SelectedStockItem = (props) => {
  let { name, ticker } = props.stock;
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
      onPress={props.onPress}
    >
      <View style={{ padding: 5, borderBottomColor: "black", borderBottomWidth: 0.5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#318d71" }}>{ticker}</Text>
        <Text style={{ fontSize: 16, color: "white" }}>{name}</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "gray" }}>{props.count}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const allStocks = useSelector((state) => state.stocks.allStocks);
  const filteredStocks = useSelector((state) => state.stocks.filteredStocks);
  const addedStocks = useSelector((state) => state.stocks.addedStocks);
  const selectedStock = useSelector((state) => state.stocks.selectedStock);
  const dividends = useSelector((state) => state.stocks.dividends);
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
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>{dividends.annually || "--"}</Text>
        </View>
        <View style={{ height: 90, flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>Monthly</Text>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>{dividends.monthly || "--"}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>Daily</Text>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>{dividends.daily || "--"}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <FlatList
          data={addedStocks}
          keyExtractor={(item) => item.stock.ticker}
          renderItem={({ item }) => (
            <SelectedStockItem
              stock={item.stock}
              count={item.count}
              onPress={() => {
                setModalVisibility(false);
                dispatch($A($SA.SET_SELECTED_STOCK, item.stock));
              }}
            />
          )}
        ></FlatList>
      </View>
      {isModalVisible && (
        <StockSearchModal
          data={filteredStocks}
          onStockSearch={(text) => dispatch($A($SA.FILTER_STOCKS, text))}
          onStockPress={(stock) => {
            setModalVisibility(false);
            dispatch($A($SA.SET_SELECTED_STOCK, stock));
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
            dispatch($A($SA.RESET_SELECTED_STOCK, null));
          }}
        />
      )}
    </SafeAreaView>
  );
}
