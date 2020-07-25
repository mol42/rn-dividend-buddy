import * as $SA from "./actionTypes";

const initialState = {
  allStocks: [],
  filteredStocks: [],
  selectedStocks: [],
  dividends: {
    annually: null,
    monthly: null,
    daily: null,
  },
  stockDataInSelectedStocks: null,
};

const dividendCalculator = function (accumulator, selectedStock) {
  return accumulator + selectedStock.stock.dividend * selectedStock.count;
};

function calculateDividens(selectedStocks) {
  let annuallyDividendsTotal = selectedStocks.reduce(dividendCalculator, 0);

  return {
    annually: annuallyDividendsTotal,
    monthly: annuallyDividendsTotal / 12,
    daily: annuallyDividendsTotal / 365,
  };
}

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
    case $SA.FIND_STOCK_IN_SELECTED: {
      let stockDataInSelectedStocks = state.selectedStocks.find((stockData) =>
        stockData.stock.ticker.startsWith(payload.toUpperCase())
      );
      return {
        ...state,
        stockDataInSelectedStocks,
      };
    }
    case $SA.ADD_OR_EDIT_STOCK_TO_SELECTED: {
      let stockToAddOrEdit = payload.stock;
      let newStockCount = payload.count;
      let stockInSelectedStocks = state.selectedStocks.find(
        (stockData) => stockData.stock.ticker == stockToAddOrEdit.ticker.toUpperCase()
      );

      let isAddMode = !stockInSelectedStocks;
      let updatedSelectedStocks;

      if (isAddMode) {
        // yeni stock'u diziye ekleriz
        const newStockData = { stock: stockToAddOrEdit, count: newStockCount };
        updatedSelectedStocks = [...state.selectedStocks, newStockData];
      } else {
        // var olan selectedStocks dizisi içinde dolaşıp update edilmesi gereken stock'u
        // update ederiz..
        updatedSelectedStocks = state.selectedStocks.map((stockData) => {
          if (stockData.stock.ticker == stockToAddOrEdit.ticker.toUpperCase()) {
            return {
              ...stockData,
              count: newStockCount,
            };
          } else {
            return stock;
          }
        });
      }

      return {
        ...state,
        selectedStocks: updatedSelectedStocks,
        dividends: calculateDividens(updatedSelectedStocks),
        foundStock: null,
      };
    }

    default: {
      return state;
    }
  }
}
