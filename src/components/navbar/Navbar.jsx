import React from "react";
import logo from "../../assets/logo/logo-3.png";

const Navbar = () => {
  return (
    <div>
      <div className="m-0 p-0 box-border bg-lime-700">
        <div className="navbar p-7 flex justify-evenly items-center h-[20vh] ">
          <input
            className="h-7 rounded-xl outline-none pl-4"
            type="text"
            name="search"
            placeholder="search"
          />
          <img src={logo} />
          <div className="w-40 space-x-20">
            <i
              class="fa-solid fa-basket-shopping fa-2xl "
              style={{ color: "#ffffff" }}
            ></i>
            <i class="fa-solid fa-user fa-2xl" style={{ color: "#ffffff" }}></i>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex justify-evenly w-45 pt-8 pb-8 text-lime-800">
          <li className="">HOME</li>
          <li className="">PRODUCTS</li>
          <li className="">BLOGS</li>
          <li className="">ABOUT</li>
          <li className="">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
