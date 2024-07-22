import React from "react";
import Navbar from "../navbar/Navbar";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-evenly">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
