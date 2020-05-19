/*
import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
} from "./actionTypes";
*/

import * as $PA from "./actionTypes";

const initialState = {
  user: {
    name: "Tayfun",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case $PA.LOAD_USERS_LOADING: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
