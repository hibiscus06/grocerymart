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

        <div className="relative  p-10 flex flex-col h-[72vh] items-center justify-center border-double border-4 border-lime-700  contactUS ">
          <form className="flex flex-col items-center space-y-5">
            <p className="font-serif text-lime-800 text-center font-bold text-2xl">
              Love to hear from you,
              <br /> Get in touch👋
            </p>
            <div className="flex flex-col space-y-5 w-80">
              <input
                className="h-[5vh] px-2 outline-none border border-lime-600 rounded-md"
                type="text"
                name="name"
                placeholder="name"
              />

              <input
                className="h-[5vh] px-2 outline-none border border-lime-600 rounded-md"
                type="email"
                name="email"
                placeholder="email"
              />

              <input
                className="h-[5vh] px-2 outline-none border border-lime-600 rounded-md"
                type="number"
                name="phonenumber"
                placeholder="phone number"
              />

              <textarea
                rows={4}
                cols={4}
                className="px-2 outline-none border border-lime-600 rounded-md"
                type="text"
                name="message"
                placeholder="message"
              />

              <button className="items-center border bg-red-500 rounded-2xl h-[6vh] ">
                <p className="text-white text-2xl hover:text-xl">
                  Send Message
                </p>
              </button>
            </div>
          </form>
        </div>

        <div className="details my-5">
          <img className="h-[80vh]" src={c6} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
