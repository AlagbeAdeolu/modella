import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-[50dvh] max-h-[900px]">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-center text-white w-[500px] text-6xl">
          Let's find a face for your brand.
        </h2>
        <div className="flex  items-center justify-center text-black  bg-[#C38F79]">
          <p className="px-4 py-2 x">Book a model</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
