import React from "react";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <div>{console.log(data.productList)}</div>
    </>
  );
};

export default Cart;
