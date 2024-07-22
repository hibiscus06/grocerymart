import React from "react";
import dairy from "../../assets/categories/dairy_eggs.png";
import fruit from "../../assets/categories/fruits/33.jpg";
import veggie from "../../assets/categories/vegetables/26.jpg";
import meat from "../../assets/categories/Meat/meat.png";
import bread from "../../assets/categories/Breads/5.jpg";
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
  const loc = useLocation();
  return (
    <div className="flex flex-col space-y-5 m-5 font-serif">
      <p className="text-center text-4xl text-lime-800 font-bold">Categories</p>
      <div className="flex flex-row justify-evenly md:flex flex-row flex-wrap space-y-2">
        <Link
          to="/product/Fruit"
          className={
            loc.pathname === "/product/Fruit"
              ? "font-bold shadow-lg border border-gray-100"
              : ""
          }
        >
          <div className="w-40 flex flex-row items-center gap-2 shadow-sm cursor-pointer">
            <img className="h-20" src={fruit} />
            <p className="text-lg">Fruits</p>
          </div>
        </Link>

        <Link
          to="/product/Vegetable"
          className={
            loc.pathname === "/product/Vegetable"
              ? "font-bold shadow-lg border border-gray-100"
              : ""
          }
        >
          <div className="w-50 flex flex-row items-center gap-2 shadow-sm cursor-pointer">
            <img className="h-20" src={veggie} />
            <p className="text-lg">Vegetables</p>
          </div>
        </Link>

        <Link
          to="/product/Meat"
          className={
            loc.pathname === "/product/Meat"
              ? "font-bold shadow-lg border border-gray-100"
              : ""
          }
        >
          <div className="w-40 flex flex-row items-center gap-2 shadow-sm cursor-pointer">
            <img className="h-20" src={meat} />
            <p className="text-lg">Meat</p>
          </div>
        </Link>

        <Link
          to="/product/Bread"
          className={
            loc.pathname === "/product/Bread"
              ? "font-bold shadow-lg border border-gray-100"
              : ""
          }
        >
          <div className="w-40 flex flex-row items-center gap-2 shadow-sm cursor-pointer">
            <img className="h-20" src={bread} />
            <p className="text-lg">Breads</p>
          </div>
        </Link>

        <Link
          to="/product/Dairy"
          className={
            loc.pathname === "/product/Dairy"
              ? "font-bold shadow-lg border border-gray-100"
              : ""
          }
        >
          <div className="w-50 flex flex-row items-center gap-2 shadow-sm cursor-pointer">
            <img className="h-20" src={dairy} />
            <p className="text-lg">Dairy</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
