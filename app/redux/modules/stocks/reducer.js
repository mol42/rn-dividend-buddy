import * as $SA from "./actionTypes";

const initialState = {
  allStocks: [],
};

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case $SA.STORE_ALL_STOCKS: {
      return {
        ...state,
        allStocks: payload,
      };
    }
    default: {
      return state;
    }
  }
}
