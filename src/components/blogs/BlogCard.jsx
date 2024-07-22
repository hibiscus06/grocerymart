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
=======
import breakfast from "../../assets/categories/breakfast.png";

const BlogCard = () => {
  const blogData =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? ";
  return (
    <>
      <div className="w-[40%] cursor-pointer flex flex-row border border-gray items-center my-3 py-4 font-serif rounded-md space-y-2 hover:shadow-[3px_2px_15px_8px_rgba(0,0,0,0.1)] hover:transition-shadow duration-500 ease-in-out">
        <div className="">
          <img src={breakfast} alt="image" />
        </div>
        <div>
          <p className="text-xl font-bold text-lime-900">
            The favourite breakfast
          </p>
          <p>{blogData.substring(0, 150) + "..."}</p>
        </div>
      </div>
    </>
>>>>>>> 76792a7a92860790e1f7ff7e1cacc7461d355b6a
  );
};

export default BlogCard;
