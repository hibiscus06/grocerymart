import React from "react";
import deal1 from "../../assets/deals/deal1.png";
import deal2 from "../../assets/deals/deal2.png";
import deal3 from "../../assets/deals/deal3.png";

const Deals = () => {
  return (
    <div className="p-8 items-center">
      <p className="text-lime-900 font-bold text-4xl font-serif text-center pb-5">
        Deals we offer!
      </p>
      <div className="flex flex-row justify-center gap-5">
        <img src={deal1} alt="deal" className="center" />
        <img src={deal2} />
        <img src={deal3} />
      </div>
    </div>
  );
};

export default Deals;
