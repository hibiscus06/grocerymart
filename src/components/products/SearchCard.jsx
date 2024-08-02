import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { baseUrl } from "../../config/config";
import ProductCard from "./ProductCard";
import Navbar from "../navbar/Navbar";
import img from "../../assets/thinkingSearch.png";

const SearchCard = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query");

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

  const arr = data?.filter((item) =>
    item.name.toLowerCase().startsWith(query.toLowerCase())
  );
  console.log(arr, data);
  return (
    <>
      <Navbar />
      {arr.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold text-lime-900 text-center">
            What do you need today?
            <br /> Apples,Cheese,Bread, we have got it all!
          </p>
          <img className="opacity-75 h-[75vh] w-[75vh]" src={img} />
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center">
          {arr.map((item) => {
            return <ProductCard props={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default SearchCard;
