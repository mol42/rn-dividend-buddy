import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
} from "./actionTypes";

const initialState = {
  user: {
    name: "Tayfun",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_LOADING: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
