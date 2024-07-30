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
      <div className="mt-5 text-center space-y-2 font-serif">
        <p className="text-4xl text-lime-900 font-bold">
          Welcome to FreshMart!
        </p>
        <p className="text-lime-900 italic text-xl">
          Where quality meets necessity
        </p>

        <p className="text-center">
          FreshMart was founded with a vision to revolutionize the grocery
          shopping experience. Our journey began with a passion for quality and
          a dedication to community.
          <br />
          Over the years, we have grown from a small neighborhood store into a
          trusted name in grocery retail, thanks to our loyal customers and
          hardworking team.
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
                We prioritize freshness in everything we offer, ensuring that
                you get only the best quality products.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src={img3} className="" />
            </div>
            <div>
              <p className="font-bold">SUPER HEALTHY</p>
              <p className="text-sm text-lime-900">
                We support local farms and suppliers, bringing you products that
                are not only fresh but also contribute to our community.
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
              <p className="font-bold">100% NATURAL</p>
              <p className="text-sm text-lime-900">
                We are committed to environmentally-friendly practices, from
                reducing waste to offering eco-friendly products.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src={img4} className="" />
            </div>
            <div>
              <p className="font-bold">PREMIUM QUALITY</p>
              <p className="text-sm text-lime-900">
                Our friendly and knowledgeable staff are here to assist you with
                any needs and make your shopping experience enjoyable.
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
