import React from "react";
import Navbar from "../navbar/Navbar";
import BlogCard from "./BlogCard";
import Footer from "../footer/Footer";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <p className="text-center font-bold font-serif text-3xl text-orange-800">
            Discover quick recipies and healthy tips and tricks!
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
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
