import React from "react";
import { Carousel } from "@material-tailwind/react";
import slider1 from "../../assets/b2.jpg";
import slider2 from "../../assets/slider/s2.jpg";
import slider5 from "../../assets/slider/s5.jpg";
import slider4 from "../../assets/slider/s4.jpg";

const Slider = () => {
  return (
    <Carousel
      className="rounded-sm"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-10 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div>
        <img
          src={slider1}
          alt="image 1"
          className="h-[80vh] w-full aspect-video object-cover relative"
        />
        <p className="absolute top-[10vh] left-[10vh] text-lime-200 shadow-xl font-bold text-6xl font-serif italic">
          Discover best quality products at FreshMart!
        </p>
      </div>

      <img
        src={slider4}
        alt="image 2"
        className="h-[80vh] w-full object-cover"
      />
      <img
        src={slider5}
        alt="image 3"
        className="h-[80vh] w-full object-cover"
      />
    </Carousel>
  );
};

export default Slider;
