import React from "react";
import Slider from "./Slider";
import Deals from "./Deals";
import Partners from "./Partners";
import Categories from "../products/Categories";
import Bestsellers from "./Bestsellers";

const Hero = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Deals />
      <Bestsellers />
      <Partners />
    </div>
  );
};

export default Hero;
