import { combineReducers } from "redux";
// import loginReducers from "./loginReducers";
// import navReducers from "./navReducers";
import mainReducer from "./reducers";

const AppReducer = combineReducers({
  currentlyPlaying,
  songs,
  mainReducer
});

export default AppReducer;