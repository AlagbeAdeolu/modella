import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Magazines = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const covers = [
    {
      src1: "/assets/covers/cover1.jpg",
      src2: "/assets/covers/cover2.jpg",
      src3: "/assets/covers/cover3.jpg",
    },
    {
      src1: "/assets/covers/cover4.jpg",
      src2: "/assets/covers/cover5.jpg",
      src3: "/assets/covers/cover6.jpg",
    },
    {
      src1: "/assets/covers/cover7.jpg",
      src2: "/assets/covers/cover8.jpg",
      src3: "/assets/covers/cover9.jpg",
    },
  ];
  const handleNext = () => {
    if (currentSlide === covers.length - 1) {
      return;
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  const nextButtonDisabled = currentSlide === covers.length - 1
  const prevButtonDisabled = currentSlide === 0


  return (
    <div className="w-full flex flex-col gap-10 ">
      <div className="border border-[#C38F79] flex w-full h-20 gap-2 items-center ">
        <div className="w-20 h-20 border-t border-[#C38F79] items-center flex justify-center rotate-90">
          <ArrowRightAltIcon fontSize="large" />
        </div>
        <h2 className="ml-6 text-white text-4xl">Featured Magazines</h2>
      </div>
      <div className="flex flex-col h-screen w-full">
        <div className="flex items-center justify-center gap-5">
          {covers.map((cover, idx) =>
            currentSlide === idx ? (
              <div className="flex  justify-center items-center gap-5" key={idx}>
                <div className="h-full w-full">
                  <img
                    className="w-full h-[600px] object-contain"
                    src={cover.src1}
                    alt={`Model ${idx + 1}`}
                  />
                </div>
                <div className="h-full w-full">
                  <img
                    className="w-full h-[600px] object-contain"
                    src={cover.src2}
                    alt={`Model ${idx + 1}`}
                  />
                </div>
                <div className="h-full w-full">
                  <img
                    className="w-full h-[600px] object-contain"
                    src={cover.src3}
                    alt={`Model ${idx + 1}`}
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="flex justify-between mt-3">
          <div
            onClick={handlePrev}
            className={prevButtonDisabled ? 'text-black border-black' : `cursor-pointer border-gray-400 border p-3 rounded-full`}
          >
            <ArrowBackIcon />
          </div>
          <div
            onClick={handleNext}
            className={nextButtonDisabled ? 'text-black border-black' :"border-gray-400 border p-3 rounded-full"}
          >
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
