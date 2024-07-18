import React from "react";
import p1 from "../../assets/partners/partner-1.jpg";
import p2 from "../../assets/partners/partner-2.jpg";
import p3 from "../../assets/partners/partner-3.jpg";
import p4 from "../../assets/partners/partner-4.jpg";
import p5 from "../../assets/partners/partner-5.jpg";
import p6 from "../../assets/partners/partner-6.jpg";

const Partners = () => {
  return (
    <div>
      <p className="text-lime-900 font-bold text-4xl font-serif text-center">
        Our Partners
      </p>
      <div className="flex flex-row justify-center">
        <img src={p1} />
        <img src={p2} />
        <img src={p3} />
        <img src={p4} />
        <img src={p5} />
        <img src={p6} />
      </div>
    </div>
  );
};

export default Partners;
