import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import ProductCard from "../products/ProductCard";

const Bestsellers = () => {
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
      <div className="text-center">
        <p className="font-serif text-4xl text-lime-900 font-bold">
          Bestsellers!
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly px-4">
        {data.slice(0, 3).map((items, index) => {
          return <ProductCard props={items} />;
        })}
      </div>
    </>
  );
};

export default Bestsellers;
