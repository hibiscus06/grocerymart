import React from "react";
import logo from "../../assets/logo/logo-3.png";
import f1 from "../../assets/footer/f1.png";
import f2 from "../../assets/footer/f2.png";
import f3 from "../../assets/footer/f3.png";

const Footer = () => {
  return (
    <div className=" text-white font-serif h-[40h] pt-8 pb-4">
      <div className="footer1 bg-lime-700 flex justify-evenly pt-5 pb-5">
        <div className="address space-y-2">
          <p>
            <i class="fa-solid fa-house pr-2" style={{ color: "#ffffff" }}></i>
            123 Suspendis matti, VST District, NY Accums, North American
          </p>
          <p>
            <i class="fa-solid fa-phone pr-2" style={{ color: "#ffffff" }}></i>
            0123-456-78910
          </p>
          <p className="">
            <i
              class="fa-solid fa-envelope pr-2"
              style={{ color: "#ffffff" }}
            ></i>
            support@domain.com
          </p>
        </div>
        <div className="socials space-y-2">
          <img className="" src={logo} alt="" />

          <div className="pt-3 space-x-3 text-center">
            <i className="fa-brands fa-instagram fa-xl text-white hover:text-yellow-500"></i>
            <i className="fa-brands fa-facebook fa-xl text-white hover:text-yellow-500"></i>
            <i className="fa-brands fa-linkedin fa-xl text-white hover:text-yellow-500"></i>
            <i className="fa-brands fa-twitter fa-xl text-white hover:text-yellow-500"></i>
          </div>
        </div>

        <div className="newsletter space-y-2">
          <p>NEWSLETTER</p>
          <p>
            Subscribe to our newsletter to recieve offers and exclusive news.
          </p>
          <input
            className="p-1 outline-none text-black w-1/2"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <button className="p-1 bg-purple-900 rounded-br-full rounded-tr-full">
            Subscribe
          </button>
        </div>
      </div>

      <div className="footer2 bg-white text-black flex font-serif pt-5 justify-evenly h-[10vh]">
        <div className="flex">
          <img src={f1} className="pr-2" />
          <p>
            FREE SHIPPING ITEM <br /> Zero shipping expenses
          </p>
        </div>
        <div className="flex">
          <img src={f2} className="pr-2" />
          <p>
            SECURED PAYMENT <br /> Fully secured portal
          </p>
        </div>
        <div className="flex">
          <img src={f3} className="pr-2" />
          <p>
            MONEY BACK GUARANTEE <br /> Full refund policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
