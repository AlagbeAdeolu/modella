import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Featured = () => {
  return (
    <div>
      <div className="border border-[#C38F79] flex w-full h-20 gap-2 items-center">
        <div className="w-20 h-20 border-t border-[#C38F79] items-center flex justify-center rotate-90">
          <ArrowRightAltIcon fontSize="large" />
        </div>
        <h2 className="ml-6 text-white text-4xl">Featured Runways</h2>
      </div>
    </div>
  );
};

export default Featured;
