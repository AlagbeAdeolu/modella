import React from "react";

const Footer = () => {
  return (
    <div className="flex border-b py-6 border-gray-600 border-t items-center my-4 justify-between ">
      <div className="flex justify-between my-4 ml-3">
        <h2 className="text-4xl text-[#C38F79]">Modella</h2>
      </div>
      <div className="flex gap-8 text-white">
        <p>Home</p>
        <p>Pricing</p>
        <p>Portfolio</p>
        <p>Reviews</p>
      </div>
      <div className="mr-3 text-[#C38F79]">
        <p>A modelling agency</p>
      </div>
    </div>
  );
};

export default Footer;
