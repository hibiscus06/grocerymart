import React from "react";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import Footer from "../footer/Footer";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="overflow-y-scroll h-[80vh] mx-10 px-10 w-3/4 flex flex-row flex-wrap justify-evenly">
          {data?.productList.map((items, index) => {
            return <CartCard props={items} />;
          })}
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <div className="border border-black w-[20vh] ">
            <p>Billing details</p>
            <p> Total items : {data.totalItems}</p>
            <p>Total price : {data.totalPrice}</p>
            <p>Shipping fee</p>
            <p>Total amount</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
