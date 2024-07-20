import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import ProductCard from "./ProductCard";
import Footer from "../footer/Footer";
import Categories from "./Categories";
import { baseUrl } from "../../config/config";

const Products = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch(baseUrl);
    let result = await res.json();
    if (res.status === 200) {
      setData(result);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Categories />
      <div className="flex flex-row justify-between">
        <div>
          <p className="ml-5 text-xl font-serif font-bold">You might need</p>
        </div>
        <div className="mr-5">
          <button className="flex flex-row justify-evenly items-center border text-white bg-lime-600 rounded w-20 h-8 cursor-pointer">
            <p className="font-serif text-sm">Filter</p>
            <i class="fa-solid fa-filter" style={{ color: "#ffffff" }}></i>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly px-4">
        {data.map((items, index) => {
          return <ProductCard props={items} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Products;
