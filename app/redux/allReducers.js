import { combineReducers } from "redux";
import profileReducer from "./modules/profile/reducer";

const reducers = combineReducers({
  profile: profileReducer,
});

export default reducers;
