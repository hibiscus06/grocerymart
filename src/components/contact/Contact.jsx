import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import c6 from "../../assets/contact6.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between items-center font-serif">
        {/* form-details  */}
        <div></div>

        <div className="relative  p-10 flex flex-col h-[72vh] items-center justify-center border-4 border-double border-lime-800 ">
          <form className="flex flex-col items-center space-y-5">
            <p className="font-serif text-lime-800 text-center font-bold text-2xl">
              Love to hear from you,
              <br /> Get in touch👋
            </p>
            <div className="flex flex-col space-y-5 w-80">
              <input
                className="h-[5vh] px-2 outline-none border border-lime-600"
                type="text"
                name="name"
                placeholder="name"
              />

              <input
                className="h-[5vh] px-2 outline-none border border-lime-600"
                type="email"
                name="email"
                placeholder="email"
              />

              <input
                className="h-[5vh] px-2 outline-none border border-lime-600"
                type="number"
                name="phonenumber"
                placeholder="phone number"
              />

              <textarea
                rows={4}
                cols={4}
                className="px-2 outline-none border border-lime-600"
                type="text"
                name="message"
                placeholder="message"
              />

              <button className="items-center border bg-red-500 rounded-md h-[6vh] ">
                <p className="text-white text-2xl hover:text-xl">
                  Send Message
                </p>
              </button>
            </div>
          </form>
        </div>

        <div className="details my-5">
          <img className="h-[75vh]" src={c6} />
          {/* <div className="flex flex-col justify-center items-center">
            <div className="flex gap-3 items-center">
              <i class="fa-solid fa-house" style={{ color: "" }}></i>
              <p className="font-bold ">ADDRESS</p>
            </div>
            <p>123 Suspendis matti, VST District, </p>
            <p>NY Accums, North America</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-phone" style={{ color: "" }}></i>
              <p className="font-bold">HOTLINE</p>
            </div>
            <p>
              0123-456-78910 <br /> 0123-456-78910
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-envelope" style={{ color: "" }}></i>
              <p className="font-bold">MAIL SUPPORT</p>
            </div>
            <p>support@domain.com</p> support@domain.com
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
