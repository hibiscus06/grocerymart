import React from "react";
import Slider from "./Slider";
import Deals from "./Deals";
import Partners from "./Partners";
import Categories from "../products/Categories";

const Hero = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Deals />
      <Partners />
    </div>
  );
};

export default Hero;
