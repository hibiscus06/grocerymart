import { ACTION_TYPE } from "../constant/actionType";

const initialState = {
  productList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADDTOCART:
      let flag = false;
      if (state.productList.length > 0) {
        for (let i = 0; i < state.productList.length; i++) {
          console.log("action", action.payload.id);
          console.log("state", state.productList[i].id);
          console.log(
            "compare",
            state.productList[i].id,
            "==",
            action.payload.id
          );
          if (state.productList[i].id !== action.payload.id) {
            flag = true;
          } else {
            flag = false;
            break;
          }
        }
      } else {
        state.productList.push(action.payload);
      }
      console.log("flag", flag);
      if (flag === true) {
        state.productList.push(action.payload);
        flag = false;
      }

      return {
        ...state,
      };
    default:
      return state;
  }
};
export default cartReducer;
