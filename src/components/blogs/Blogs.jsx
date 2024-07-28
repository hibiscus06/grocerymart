import React from "react";
import Navbar from "../navbar/Navbar";
import BlogCard from "./BlogCard";
import Footer from "../footer/Footer";
import BlogCardSingle from "./BlogCardSingle";
import BackToTop from "../backtotop/BackToTop";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-row flex-wrap mx-20 ">
          <div>
            <BlogCardSingle />
          </div>

          <div>
            <p className="mt-3 font-bold font-serif text-3xl text-lime-800">
              Our Recent Articles
            </p>
            <p className="text-gray-500">
              Stay informed with Our Latest Insights
            </p>
          </div>

          <div className="flex justify-between">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Blogs;
