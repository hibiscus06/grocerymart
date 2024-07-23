import React from "react";
import Navbar from "../navbar/Navbar";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <Navbar />
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
