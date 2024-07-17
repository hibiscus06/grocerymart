import React from "react";
import logo from "../../assets/logo/logo-3.png";

const Footer = () => {
  return (
    <div className=" bg-lime-700 text-white h-[20vh]">
      <div className="footer1 flex justify-evenly pt-10">
        <div className="address">
          <p>
            <i class="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
            123 Suspendis matti, VST District, NY Accums, North American
          </p>
          <p>0123-456-78910</p>
          <p>support@domain.com</p>
        </div>
        <div className="socials">
          <img src={logo} alt="" />
          Follow us
        </div>

        <div className="newsletter">
          <p>NEWSLETTER</p>
          <p>
            Subscribe to our newsletter to recieve offers and exclusive news
          </p>
        </div>
      </div>

      <div className="footer2"></div>
    </div>
  );
};

export default Footer;
