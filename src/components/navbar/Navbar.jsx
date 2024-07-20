import React from "react";
import logo from "../../assets/logo/logo-3.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const loc = useLocation();
  return (
    <div className="w-full font-serif">
      <div className="m-0 p-0 box-border bg-lime-700">
        <div className="navbar p-7 flex justify-evenly items-center h-[20vh] ">
          <div className="w-1/4">
            <input
              className="h-10 rounded-sm outline-none pl-4 focus:w-[45vh] focus:bg-lime-100"
              type="text"
              name="search"
              placeholder="search"
            />
          </div>
          <div className="logo flex flex-col items-center">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="w-1/6 flex flex-row justify-evenly">
            <div>
              <i
                class="fa-solid fa-basket-shopping fa-2xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div>
              <i
                class="fa-solid fa-user fa-2xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex justify-evenly w-50 pt-8 pb-8 text-lime-800">
          <li className="w-5 hover:font-bold">
            <Link
              to="/product"
              className={
                loc.pathname === "/product" ? "font-bold" : "text-lime-800"
              }
            >
              PRODUCT
            </Link>
          </li>
          <li className="w-5 hover:font-bold">
            <Link
              to="/blogs"
              className={
                loc.pathname === "/blogs" ? "font-bold" : "text-lime-800"
              }
            >
              BLOGS
            </Link>
          </li>
          <li className="nav-list w-5 hover:font-bold">
            <Link
              to="/about"
              className={
                loc.pathname === "/about" ? "font-bold" : "text-lime-800"
              }
            >
              ABOUT
            </Link>
          </li>
          <li className="w-5 hover:font-bold">
            <Link
              to="/contact"
              className={
                loc.pathname === "/contact" ? "font-bold" : "text-lime-800"
              }
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
