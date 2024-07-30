import { ACTION_TYPE } from "../constant/actionType";

export const addToCart = (value) => {
  return {
    type: ACTION_TYPE.ADDTOCART,
    payload: value,
  };
};

export const increment = (value) => {
  return {
    type: ACTION_TYPE.INCREMENTPRODUCT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: ACTION_TYPE.DECREMENTPRODUCT,
    payload: value,
  };
};

export const totalPrice = () => {
  return {
    type: ACTION_TYPE.TOTALPRICE,
  };
};

export const totalItems = () => {
  return {
    type: ACTION_TYPE.TOTALITEMS,
  };
};

export const deleteItem = (value) => {
  return {
    type: ACTION_TYPE.DELETEITEM,
    payload: value,
  };
};

export const deleteCart = () => {
  return {
    type: ACTION_TYPE.DELETECART,
  };
};

export const loginUser = (value) => {
  return {
    type: ACTION_TYPE.LOGIN,
    payload: value,
  };
};
