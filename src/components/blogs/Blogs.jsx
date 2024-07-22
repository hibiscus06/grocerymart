import React from "react";
import Navbar from "../navbar/Navbar";
import BlogCard from "./BlogCard";
import Footer from "../footer/Footer";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="text-center ">
        <p className="text-3xl font-serif font-bold text-orange-900">
          Discover unique recipies and healthy tips and tricks!
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
