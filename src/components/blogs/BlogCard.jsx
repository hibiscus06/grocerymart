import React from "react";
import image from "../../assets/categories/breakfast.png";

const BlogCard = () => {
  const data =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, officia ducimus! Sit placeat quos dolorum dignissimos ipsa, fugiat voluptate deserunt nihil provident, perspiciatis ratione ipsum optio unde, doloremque voluptas lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio ipsum dicta nesciunt sed, quasi consequatur dolorum commodi provident odit repellendus, consequuntur deserunt veniam? Earum sit quod cumque voluptas perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad necessitatibus repellendus pariatur perspiciatis, placeat voluptatum porro dolorem repellat harum molestiae, earum tenetur ipsum nemo iusto! Minus id dolorum doloremque";

  return (
    <div className="w-[40%] flex flex-col border border-gray items-center my-3 py-4 font-serif rounded-md space-y-2 hover:shadow-[3px_2px_15px_8px_rgba(0,0,0,0.1)] hover:transition-shadow duration-500 ease-in-out">
      <img className="h-20" src={image} />
      <div className="flex flex-col">
        <p className="text-center font-bold text-lime-800 ">
          The Favourite Breakfast
        </p>
        {data.substring(0, 150) + "..."}
      </div>
    </div>
  );
};

export default BlogCard;
