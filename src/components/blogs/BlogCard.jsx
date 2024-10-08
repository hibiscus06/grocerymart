import React from "react";

import breakfast from "../../assets/categories/breakfast2.png";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const blogData =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? ";
  return (
    <>
      <div className="w-[30%] cursor-pointer border border-gray my-3 py-4 font-serif rounded-md space-y-2 hover:shadow-lg hover:transition-shadow duration-500 ease-in-out">
        <Link to="/singleBlogPage">
          <div className="flex flex-col justify-center items-center">
            <div className="p-2">
              <img className="h-[30vh] w-[80vh]" src={breakfast} alt="image" />
            </div>
            <div className="mx-5">
              <div className="flex justify-between">
                <p className="text-yellow-700">Priya Jain</p>
                <p className="text-gray-600 text-sm">20 March,2024</p>
              </div>

              <p className="mt-2 text-xl font-bold text-lime-900 text-left">
                The favourite breakfast
              </p>
              <p>{blogData.substring(0, 190)}...</p>
              <p className="text-lime-700 font-bold hover:text-yellow-600">
                Read more
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
