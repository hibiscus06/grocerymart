import React from "react";

import breakfast from "../../assets/blog.jpg";
import { Link } from "react-router-dom";

const BlogCardSingle = () => {
  const blogData =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur itaque repellat vitae sed, quam quia unde eos dicta exercitationem reiciendis id quaerat inventore accusamus nihil eaque amet mollitia error dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum sit doloribus dolores. Amet nesciunt veritatis blanditiis at neque, tempora deserunt distinctio tempore, nemo maxime, aut ratione fuga perferendis sunt? ";
  return (
    <>
      <div className="cursor-pointer items-center my-3 py-4 font-serif rounded-md space-y-2 ">
        <Link to="/singleBlogPage">
          <div className="flex flex-row">
            <div className="p-2 border border-gray-100 rounded-xl shadow-lg">
              <img
                className="rounded-xl h-[60vh] w-[100vh]"
                src={breakfast}
                alt="image"
              />
            </div>
            <div className="mx-20 w-4/5">
              <button className="mt-10 my-2 rounded-full border border-lime-900 bg-lime-100">
                <p className="px-1 text-lime-900">8 mins read</p>
              </button>
              <p className="text-6xl font-bold text-lime-900">
                What Ayurveda says about citrus fruits and their benefits
              </p>
              <p className="mt-5">{blogData.substring(0, 285) + "..."}</p>
              <p className="text-lime-700 hover:text-yellow-600 font-bold">
                Read more
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogCardSingle;
