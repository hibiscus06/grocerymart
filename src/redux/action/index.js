import { ACTION_TYPE } from "../constant/actionType";

export const addToCart = (value) => {
  return {
    type: ACTION_TYPE.ADDTOCART,
    payload: value,
  };
};
