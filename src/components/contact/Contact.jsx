import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="parent flex flex-row items-center">
        <div className="w-1/2 details space-y-10 flex flex-col items-center">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="flex gap-3 justify-center items-center">
              <i class="fa-solid fa-house" style={{ color: "" }}></i>
              <p className="font-bold ">ADDRESS</p>
            </div>
            <p>123 Suspendis matti, VST District, </p>
            <p>NY Accums, North America</p>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-phone" style={{ color: "" }}></i>
              <p className="font-bold">HOTLINE</p>
            </div>
            <p>
              0123-456-78910 <br /> 0123-456-78910
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-envelope" style={{ color: "" }}></i>
              <p className="font-bold">MAIL SUPPORT</p>
            </div>
            <p>support@domain.com</p> support@domain.com
          </div>
        </div>
        {/* form-details  */}
        <div className="w-1/2 flex justify-center">
          <form className="space-y-3">
            <p className="font-serif">Enter your details here!</p>
            <div className="flex flex-col space-y-5 w-80">
              <input
                className="outline-none border border-lime-600"
                type="text"
                name="name"
                placeholder="name"
              />

              <input
                className="outline-none border border-lime-600"
                type="email"
                name="email"
                placeholder="email"
              />

              <input
                className="outline-none border border-lime-600"
                type="number"
                name="phonenumber"
                placeholder="phone number"
              />

              <textarea
                rows={4}
                cols={4}
                className="outline-none border border-lime-600"
                type="text"
                name="message"
                placeholder="message"
              />

              <button className=" text-white items-center border bg-red-500 rounded-md h-8">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
