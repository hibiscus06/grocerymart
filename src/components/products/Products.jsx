import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import ProductCard from "./ProductCard";
import Footer from "../footer/Footer";
import Categories from "./Categories";
import { baseUrl } from "../../config/config";
import Filter from "./Filter";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);
  const getData = async () => {
    let res = await fetch(baseUrl);
    let result = await res.json();
    if (res.status === 200) {
      setData(result);
    }
  };

  const handleFilter = () => {
    setFilter(!filter);
    if (filter === false) getData();
  };

  const handleLowtoHigh = () => {
    setFilter(!filter);
    const sortedData = [...data].sort((a, b) => a.price - b.price);
    setData(sortedData);
  };

  const handleHightoLow = () => {
    setFilter(!filter);
    const sortedData = [...data].sort((a, b) => b.price - a.price);
    setData(sortedData);
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

        {/* <div className="mr-5">
          <button
            onClick={() => handleFilter()}
            className="flex flex-row justify-evenly outline-none items-center border text-white bg-lime-600 rounded w-20 h-8 cursor-pointer"
          >
            <p className="font-serif text-sm">Filter</p>
            <i class="fa-solid fa-filter" style={{ color: "#ffffff" }}></i>
          </button>
          {filter ? (
            <div>
              <ul>
                <li className="text-sm flex flex-row justify-evenly items-center border text-white bg-lime-600 rounded w-20 h-8 cursor-pointer">
                  <button onClick={handleLowtoHigh}>Low to high</button>
                </li>
                <li className="text-sm flex flex-row justify-evenly items-center border text-white bg-lime-600 rounded w-20 h-8 cursor-pointer">
                  <button onClick={handleHightoLow}>High to low</button>
                </li>
              </ul>
            </div>
          ) : null}
        </div> */}

        <Filter
          handleLowtoHigh={handleLowtoHigh}
          handleHightoLow={handleHightoLow}
          handleFilter={handleFilter}
          filter={filter}
        />
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
