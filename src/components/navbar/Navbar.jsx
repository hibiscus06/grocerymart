import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/logo-3.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { totalItems } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const auth = localStorage.getItem("isAuth");

  useEffect(() => {
    dispatch(totalItems());
  }, []);

  const cartItem = () => {
    if (data.totalItems === 0) {
      return "+";
    } else return data.totalItems;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  const handleSignOut = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const loc = useLocation();
  return (
    <div className="w-full font-serif sticky top-0 z-10 ">
      <div className="m-0 p-0 box-border bg-lime-700 ">
        <div className="navbar p-7 flex justify-evenly items-center h-[10vh] ">
          <div className="logo flex flex-col items-center">
            <Link to="/">
              <img className="h-12" src={logo} />
            </Link>
          </div>

          <div className="w-1/4 pl-28">
            <form onSubmit={handleSubmit}>
              <input
                className="h-10 w-96 rounded-sm outline-none pl-4  focus:bg-lime-100"
                type="text"
                name="search"
                placeholder="Search Apples.."
                onChange={handleSearch}
                autoComplete={false}
              />
            </form>
          </div>

          <div className="w-1/4 flex flex-row justify-between pl-44">
            <Link to="/cart">
              <div className="relative">
                <i
                  className="fa-solid fa-basket-shopping fa-2xl"
                  style={{ color: "#ffffff" }}
                ></i>
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white bg-red-600 rounded-full flex justify-center items-center w-6 h-6 text-sm">
                  <span className="">{cartItem()}</span>
                </div>
              </div>
            </Link>
            <div>
              {auth ? (
                <button
                  onClick={() => handleSignOut()}
                  className="border-2 border-lime-100 rounded-md h-[4.5vh] w-[12vh] active:skew-x-3 "
                >
                  <p className="text-white text-lg text-center">Signout</p>
                </button>
              ) : (
                <Link to="/login">
                  <button className="border-2 border-lime-100 rounded-md h-[4.5vh] w-[10vh] active:skew-x-3">
                    <p className="text-white text-lg text-center">Login</p>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lime-100 h-[8vh] flex flex-col justify-center">
        <ul className="flex justify-evenly w-50 pt-8 pb-8 text-lime-800">
          <li className="w-5 hover:font-bold">
            <Link
              to="/product"
              className={
                loc.pathname === "/product" ? "font-bold" : "text-lime-800"
              }
            >
              PRODUCTS
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
