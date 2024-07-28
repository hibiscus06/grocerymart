import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${
        showButton ? "block" : "hidden"
      } fixed bottom-3 right-3 z-50 border-none outline-none bg-lime-800 text-white cursor-pointer p-2 rounded-md text-md hover:bg-gray-700`}
      onClick={handleClick}
    >
      Back to top
    </button>
  );
};

export default BackToTop;
