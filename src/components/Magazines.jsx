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
      setCurrentSlide((prev) => Math.min(prev + 1, covers.length - 1));
    };
  
    const handlePrev = () => {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };
  
    const nextButtonDisabled = currentSlide === covers.length - 1;
    const prevButtonDisabled = currentSlide === 0;
  
    return (
      <div className="w-full flex flex-col gap-10">
        <div className="border border-[#C38F79] flex w-full h-20 gap-2 items-center">
          <div className="w-20 h-20 border-t border-[#C38F79] items-center flex justify-center rotate-90">
            <ArrowRightAltIcon fontSize="large" />
          </div>
          <h2 className="ml-6 text-white text-4xl">Featured Magazines</h2>
        </div>
        <div className="flex flex-col h-screen w-full">
          {covers.map((cover, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between gap-10 transition-opacity transition-transform transform ${
                currentSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-90 hidden"
              }`}
            >
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={i}
                  className="h-full w-full overflow-hidden"
                >
                  <img
                    className="w-full h-[600px] object-contain transform transition-transform duration-500"
                    style={{
                      transform: `scale(${currentSlide === idx ? 1 : 0.9})`,
                    }}
                    src={cover[`src${i + 1}`]}
                    alt={`Model ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-around mt-3">
            <div
              onClick={handlePrev}
              className={`cursor-pointer border-gray-400 border p-3 rounded-full ${
                prevButtonDisabled ? "text-black border-black" : ""
              }`}
            >
              <ArrowBackIcon />
            </div>
            <div
              onClick={handleNext}
              className={`border-gray-400 border p-3 rounded-full ${
                nextButtonDisabled ? "text-black border-black" : ""
              }`}
            >
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Magazines;
  