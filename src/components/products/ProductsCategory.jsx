import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../config/config";
import Navbar from "../navbar/Navbar";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import Footer from "../footer/Footer";
import Filter from "./Filter";

const ProductsCategory = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState(false);
  const [data, setData] = useState([]);
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
      <div className="flex justify-between">
        <div></div>
        <div>
          <Filter
            handleLowtoHigh={handleLowtoHigh}
            handleHightoLow={handleHightoLow}
            handleFilter={handleFilter}
            filter={filter}
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center">
        {data
          ?.filter((item) => {
            return item.category === category;
          })
          .map((el) => (
            <ProductCard key={el.id} props={el} />
          ))}
      </div>
      <Footer />
    </>
  );
};
//
export default ProductsCategory;
