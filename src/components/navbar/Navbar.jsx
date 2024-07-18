import React from "react";
import logo from "../../assets/logo/logo-3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="m-0 p-0 box-border bg-lime-700">
        <div className="navbar p-7 flex justify-evenly items-center h-[20vh] ">
          <div className="w-1/2">
            <input
              className="h-10 w-[35vh] rounded-sm outline-none pl-4 focus:w-[45vh] focus:bg-lime-100"
              type="text"
              name="search"
              placeholder="search"
            />
          </div>
          <div className="logo w-1/2">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="w-1/6 space-x-20">
            <i
              class="fa-solid fa-basket-shopping fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
            <i class="fa-solid fa-user fa-2xl" style={{ color: "#ffffff" }}></i>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex justify-evenly w-50 pt-8 pb-8 text-lime-800">
          <li className="w-5 hover:font-bold">
            <Link to="/product">PRODUCT</Link>
          </li>
          <li className="w-5 hover:font-bold">
            <Link to="/blogs">BLOGS</Link>
          </li>
          <li className="nav-list w-5 hover:font-bold">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="w-5 hover:font-bold">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
