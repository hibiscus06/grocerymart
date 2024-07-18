import React from "react";

const ProductCard = (props) => {
  return (
    <div className="w-[21%] flex flex-col items-center my-3 py-4 font-serif rounded-md space-y-2 bg-lime-200 hover:shadow-[3px_2px_15px_8px_rgba(0,0,0,0.1)] hover:transition-shadow duration-500 ease-in-out">
      <img className="h-20" src={props.img} />
      <p className="text-xl">{props.pname}</p>
      <p className="font-bold text-lime-900 text-xl">${props.price}</p>
      <button className="p-2 items-center bg-lime-700 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
