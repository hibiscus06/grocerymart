import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import img from "../../assets/delivery.png";
import emptycart from "../../assets/emptycart.png";
import { urlCreateOrder } from "../../config/config";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { deleteCart, totalItems, totalPrice } from "../../redux/action";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const auth = localStorage.getItem("isAuth");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    if (paymentSuccess) {
      dispatch(deleteCart());
      dispatch(totalItems());
      toast.success("Payment successful");
    }
  }, [auth, navigate, paymentSuccess]);

  const payment = (price) => {
    var price = price;
    if (price == "") {
      alert("Add items to cart");
    }

    $.ajax({
      url: urlCreateOrder,
      data: JSON.stringify({
        amount: data.totalPrice + 50,
        info: "request_info",
      }),
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      success: function (response) {
        if (response.status == "created") {
          let options = {
            key: "rzp_test_uUUpZhisIywk8A",
            amount: response.amount,
            currency: "INR",
            name: "Rudrika Singh",
            description: "Donation",
            order_id: response.id,
            handler: function (response) {
              console.log(response.razorpay_payment_id);
              console.log(response.razorpay_order_id);
              console.log(response.razorpay_signature);
              console.log("payment successfull !!");
              setPaymentSuccess(true);
            },
            prefill: {
              name: "",
              email: "",
              contact: "",
            },
            notes: {
              address: "Delhi",
            },
            theme: {
              color: "#3399cc",
            },
          };

          let rzp = new Razorpay(options);
          rzp.on("payment.failed", function (response) {
            console.log(response.error.description);
            console.log(response.error.source);
            console.log(response.error.step);
            console.log(response.error.reason);
            console.log(response.error.metadata.order_id);
            console.log(response.error.code);
            console.log(response.error.metadata.payment_id);
          });
          rzp.open(); //form open
        }
      },
      error: function (error) {
        console.log("error", error);
      },
    });
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar />
      {data.totalItems == 0 ? (
        <div className=" flex flex-col items-center">
          <p className="text-xl text-lime-900 font-bold mt-20">
            It feels empty here!
          </p>

          <img className="opacity-80 self-center" src={emptycart} />
        </div>
      ) : (
        <div className="mt-7 flex flex-row font-serif">
          <div className="overflow-y-scroll h-[70vh] mx-10 px-10 w-3/4 flex flex-col items-center">
            <div className="w-2/3 flex flex-row flex-wrap justify-evenly">
              {data?.productList.map((items, index) => {
                return <CartCard props={items} />;
              })}
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-center font-serif">
            <div className="flex flex-col justify-evenly border border-lime-200 rounded w-[30vh] h-[46vh] bg-lime-100">
              <div className="my-10 text-lime-800 flex flex-col">
                <p className="text-xl font-bold mb-5 text-center">
                  Billing details
                </p>
                <p className="m-1 pl-9">Total items : {data.totalItems}</p>
                <p className="m-1 pl-9">Total price : ₹{data.totalPrice}</p>
                <p className="m-1 pl-9">Shipping fee : ₹0</p>
                <p className="m-1 pl-9">
                  Total amount: ₹
                  <span className="font-bold">{data.totalPrice}</span>
                </p>
                <div className="flex flex-row justify-center">
                  <button
                    onClick={() => payment(data.totalPrice)}
                    className="border border-lime-600 bg-lime-800 m-1 mt-6 rounded-sm hover:scale-110 "
                  >
                    <p className="text-white w-[15vh] h-[5vh] font-bold pt-1">
                      Checkout
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center mt-5">
              <img className="h-[28vh] w-[30vh] " src={img} />
              <p className="text-lime-800 font-bold text-lg w-[28vh]">
                Experience super fast delievery! <br /> Happy to serve you!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
