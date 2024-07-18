import React from "react";
import Navbar from "../navbar/Navbar";
import ProductCard from "./ProductCard";
import img from "../../assets/categories/dairy_eggs.png";
import Footer from "../footer/Footer";

const Products = () => {
  let pname = "Eggs";
  let price = 60;
  return (
    <>
      <Navbar />
      {/* m-10 flex flex-wrap justify-evenly space-y-4 space-x-5" */}
      <div className="w-full flex flex-wrap justify-evenly px-4">
        <ProductCard img={img} pname={pname} price={price} />
        <ProductCard img={img} pname={pname} price={price} />
        <ProductCard img={img} pname={pname} price={price} />
        <ProductCard img={img} pname={pname} price={price} />
        <ProductCard img={img} pname={pname} price={price} />
        <ProductCard img={img} pname={pname} price={price} />
        <ProductCard img={img} pname={pname} price={price} />
        <ProductCard img={img} pname={pname} price={price} />
      </div>
      <Footer />
    </>
  );
};

export default Products;
