import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../config/config";
import Navbar from "../navbar/Navbar";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import Footer from "../footer/Footer";

const ProductsCategory = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch(baseUrl);
    let result = await res.json();
    if (res.status === 200) {
      setData(result);
    }
  };
  console.log("param", category);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Categories />
      <div className="w-full flex flex-wrap justify-evenly px-4">
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
