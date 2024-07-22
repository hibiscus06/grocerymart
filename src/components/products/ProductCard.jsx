import React from "react";
import img from "../../assets/categories/dairy_eggs.png";
import { addToCart } from "../../redux/action";
import { useDispatch } from "react-redux";

const ProductCard = ({ props }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="w-[21%] flex flex-col border border-gray items-center my-3 py-4 font-serif rounded-md space-y-2 hover:shadow-[3px_2px_15px_8px_rgba(0,0,0,0.1)] hover:transition-shadow duration-500 ease-in-out">
      <img
        className="h-30"
        src={`data:image/jpeg;base64,${props.image}`}
        alt={props.name}
      />
      <p className="text-xl">{props.name}</p>
      <p className="font-bold text-lime-900 text-xl">${props.price}</p>
      <p className="text-lime-900">{props.weight}</p>
      <button
        onClick={() => handleAddToCart(props)}
        className="text-white p-2 items-center bg-lime-700 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
