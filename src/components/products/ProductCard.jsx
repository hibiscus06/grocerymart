import React, { useEffect } from "react";
import { addToCart, totalItems } from "../../redux/action";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ props }) => {
  const dispatch = useDispatch();
  const addTocartToast = () => toast.success("Added to cart");

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    addTocartToast();
    dispatch(totalItems());
  };

  useEffect(() => {
    dispatch(totalItems());
  }, []);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="mx-8 w-[15%] flex flex-col border border-gray items-center my-3 pb-3 font-serif rounded-md space-y-1 hover:shadow-[3px_2px_15px_8px_rgba(0,0,0,0.1)] hover:transition-shadow duration-500 ease-in-out">
        <img
          className="h-[20vh] w-[20vh]"
          src={`data:image/jpeg;base64,${props.image}`}
          alt={props.name}
        />
        <p className="text-xl text-center text-lime-600 text-bold">
          {props.name}
        </p>
        <p className="font-bold text-lime-900 text-xl">₹{props.price}</p>
        <p className="text-lime-900">{props.weight}</p>
        <button
          onClick={() => handleAddToCart(props)}
          className="text-white p-2 items-center bg-lime-700 rounded-md"
        >
          <p className="hover:text-sm">Add to Cart</p>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
