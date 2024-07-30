import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";

const reducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
});

export default reducer;
