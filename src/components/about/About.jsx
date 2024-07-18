import React from "react";
import Navbar from "../navbar/Navbar";
import img from "../../assets/about/intro-1.png";
import Footer from "../footer/Footer";
import img1 from "../../assets/about/leaf.png";
import img2 from "../../assets/about/intro-icon-2.png";
import img3 from "../../assets/about/intro-icon-3.png";
import img4 from "../../assets/about/intro-icon-4.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="text-center space-y-2 font-serif">
        <p className="text-4xl text-lime-900 font-bold">
          Welcome to FreshMart!
        </p>
        <p className="text-lime-900 italic text-lg">
          Where quality meets necessity
        </p>

        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse atque
          ex eligendi, veniam reiciendis aliquid accusamus <br />
          quo iure iste placeat expedita aliquam. Itaque dolore dignissimos
          dolor culpa exercitationem.
        </p>
      </div>

      <div className="about ml-40 mr-40 flex pt-9 font-serif">
        <div className="text-center space-y-20 pr-10 flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <div>
              <img src={img1} className="" />
            </div>
            <div>
              <p className="font-bold">ALWAYS FRESH</p>

              <p className="text-sm text-lime-900">
                Lorem ipsum dolor sit amet, consectetur elit, sed eiusmod tempor
                incididunt dolor sit amet, consectetur elit, sed do eiusmod.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src={img3} className="" />
            </div>
            <div>
              <p className="font-bold">ALWAYS FRESH</p>
              <p className="text-sm text-lime-900">
                Lorem ipsum dolor sit amet, consectetur elit, sed eiusmod tempor
                incididunt dolor sit amet, consectetur elit, sed do eiusmod.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center">
          <img className="" src={img} />
        </div>
        <div className="pl-10 space-y-20 flex flex-col justify-center text-center">
          <div className="flex flex-col items-center">
            <div>
              <img src={img2} className="" />
            </div>
            <div>
              <p className="font-bold">ALWAYS FRESH</p>
              <p className="text-sm text-lime-900">
                Lorem ipsum dolor sit amet, consectetur elit, sed eiusmod tempor
                incididunt dolor sit amet, consectetur elit, sed do eiusmod.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src={img4} className="" />
            </div>
            <div>
              <p className="font-bold">ALWAYS FRESH</p>
              <p className="text-sm text-lime-900">
                Lorem ipsum dolor sit amet, consectetur elit, sed eiusmod tempor
                incididunt dolor sit amet, consectetur elit, sed do eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
