import { $A } from "../../helper";
import * as $SA from "./actionTypes";

const initialState = {
  allStocks: [],
  filteredStocks: [],
};

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case $SA.STORE_ALL_STOCKS: {
      return {
        ...state,
        allStocks: payload,
        filteredStocks: payload,
      };
    }
    case $SA.FILTER_STOCKS: {
      let filteredStocks = !payload
        ? state.allStocks
        : state.allStocks.filter((stock) => stock.ticker.startsWith(payload.toUpperCase()));
      return {
        ...state,
        filteredStocks,
      };
    }
    case $SA.RESET_FILTER: {
      return {
        ...state,
        filteredStocks: state.allStocks,
      };
    }
    case $SA.LOAD_ALL_STOCKS : {
      console.log("stocks reducer LOAD_ALL_STOCKS")
      return state;
    }
    default: {
      return state;
    }
  }
}
