import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  deleteItem,
  increment,
  totalItems,
  totalPrice,
} from "../../redux/action";

const CartCard = ({ props }) => {
  const dispatch = useDispatch();

  const handlePlus = (item) => {
    dispatch(increment(item.id));
    dispatch(totalPrice());
    dispatch(totalItems());
  };

  const handleMinus = (item) => {
    dispatch(decrement(item.id));
    dispatch(totalPrice());
    dispatch(totalItems());
  };

  const handleDelete = (item) => {
    dispatch(deleteItem(item.id));
    dispatch(totalPrice());
    dispatch(totalItems());
  };

  useEffect(() => {
    dispatch(totalPrice());
    dispatch(totalItems());
  }, []);

  return (
    <>
      <div className="relative w-[1/4] flex flex-col items-center text-center border border-gray-200 my-3">
        <button
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full w-4 h-4 flex items-center justify-center text-xs "
          onClick={() => handleDelete(props)}
        >
          <i
            className="fa-solid fa-trash fa-xl text-gray-500 hover:text-red-500"
            // style={{ color: "gray" }}
          ></i>
        </button>
        <img
          className="h-[20vh] w-[20vh]"
          src={`data:image/jpeg;base64,${props.image}`}
        />
        <p className="text-lime-600 font-bold">{props.name}</p>
        <p className="text-lime-700 font-semibold">
          ₹{props.price * props.quantity}
        </p>
        <div className="w-[20vh] flex flex-row items-center justify-center bg-lime-800 ">
          <button className="size-10" onClick={() => handlePlus(props)}>
            <p className="text-white font-extrabold ">
              <i className="fa-solid fa-plus text-2xl text-white hover:text-xl"></i>
            </p>
          </button>
          <p className="text-white text-xl">{props.quantity}</p>
          <button className="size-10" onClick={() => handleMinus(props)}>
            <p className="text-white font-extrabold hover:text-yellow-200">
              <i className="fa-solid fa-minus text-2xl text-white hover:text-xl"></i>
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
