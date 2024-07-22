import React from "react";
import Navbar from "../navbar/Navbar";
import BlogCard from "./BlogCard";
<<<<<<< HEAD
=======
import Footer from "../footer/Footer";
>>>>>>> 76792a7a92860790e1f7ff7e1cacc7461d355b6a

const Blogs = () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
=======
      <div className="text-center ">
        <p className="text-3xl font-serif font-bold text-orange-900">
          Discover unique recipies and healthy tips and tricks!
        </p>
      </div>
>>>>>>> 76792a7a92860790e1f7ff7e1cacc7461d355b6a
      <div className="flex flex-row flex-wrap justify-evenly">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
<<<<<<< HEAD
    </div>
=======
      <Footer />
    </>
>>>>>>> 76792a7a92860790e1f7ff7e1cacc7461d355b6a
  );
};

export default Blogs;
