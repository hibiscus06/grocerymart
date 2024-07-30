import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo-3.png";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [res, setRes] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    data.email === ""
      ? toast.error("empty email")
      : data.password === ""
      ? toast.error("empty password")
      : "";
    if (data.email == "rudrikasingh1856@gmail.com" && data.password == "1234") {
      localStorage.setItem("isAuth", true);
      navigate("/cart");
    } else {
      toast.error("Wrong credentials!");
    }
  };

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar />

      <div className="flex flex-col mt-[2vh] items-center justify-center font-serif">
        <div className="p-10 border border-lime-800 rounded-xl w-[55vh] flex-row items-center bg-lime-800 text-white">
          <div className="flex flex-col items-center space-y-5">
            <img className="h-[7vh] w-[20vh]" src={logo} />
            <p className="font-bold text-2xl">Log in to FreshMart</p>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-5">
            <div className="field">
              <label htmlFor="email">
                <p className="py-1">Email</p>

                <input
                  className="p-5 rounded-lg h-[5vh] w-[40vh] outline-none hover:border-lime-500 border-double border-2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </label>
            </div>

            <div className="field">
              <label htmlFor="password">
                <p className="py-1">Password</p>
                <input
                  className="p-5 text-lime-800 rounded-lg h-[5vh] w-[40vh] outline-none hover:border-lime-700 border-double border-2"
                  type={show ? "type" : "password"}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </label>
              <button className="float-right" onClick={(e) => handleShow(e)}>
                <p className="text-xs pt-1 hover:text-lime-200">
                  {show ? "Hide" : "Show"}
                </p>
              </button>
            </div>

            <div className="field">
              <button
                className="mt-[4vh] rounded-full font-bold border border-lime-700 bg-white h-[6vh] w-[40vh] hover:bg-lime-200"
                type="submit"
              >
                <p className="text-xl text-lime-800 "> Log in </p>
              </button>
            </div>
          </form>
          <div>
            <p className="text-sm text-gray-100 text-center">
              By continuing, you agree to FreshMart's <br />
              Terms of Service and acknowledge you've read our Privacy Policy.
              Notice at collection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
