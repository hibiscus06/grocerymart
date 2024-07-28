import { ACTION_TYPE } from "../constant/actionType";

const initialState = {
  productList: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADDTOCART:
      let flag = false;
      if (state.productList.length > 0) {
        for (let i = 0; i < state.productList.length; i++) {
          if (state.productList[i].id !== action.payload.id) {
            flag = true;
          } else {
            flag = false;
            break;
          }
        }
      } else {
        state.productList.push({ ...action.payload, quantity: 1 });
      }
      if (flag === true) {
        state.productList.push({ ...action.payload, quantity: 1 });
        flag = false;
      }

      return {
        ...state,
      };

    case ACTION_TYPE.INCREMENTPRODUCT:
      let updateCart = state.productList.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...state,
        productList: updateCart,
      };

    case ACTION_TYPE.DECREMENTPRODUCT:
      let updatedCart = state.productList
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((ite) => ite.quantity !== 0);
      return {
        ...state,
        productList: updatedCart,
      };

    case ACTION_TYPE.TOTALPRICE:
      const total = state.productList.reduce((acc, curr) => {
        let { price } = curr;
        let { quantity } = curr;
        price = price * quantity;
        acc += price;
        return acc;
      }, 0);
      return {
        ...state,
        totalPrice: total,
      };

    case ACTION_TYPE.TOTALITEMS:
      const totalItems = state.productList.reduce((acc, curr) => {
        let { quantity } = curr;
        acc += quantity;
        return acc;
      }, 0);
      return {
        ...state,
        totalItems: totalItems,
      };

    case ACTION_TYPE.DELETEITEM:
      const update = state.productList.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        productList: update,
        totalItem: update.length,
      };

    case ACTION_TYPE.DELETECART:
      return {
        ...state,
        productList: [],
        totalItem: 0,
        totalPrice: 0.0,
      };

    default:
      return state;
  }
};
export default cartReducer;
