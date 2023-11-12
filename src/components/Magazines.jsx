import React, { useState }  from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Magazines = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const covers = [
      { src: "/assets/covers/cover1.jpg" },
      { src: "/assets/covers/cover2.jpg" },
      { src: "/assets/covers/cover3.jpg" },
      { src: "/assets/covers/cover4.jpg" },
      { src: "/assets/covers/cover5.jpg" },
      { src: "/assets/covers/cover6.jpg" },
      { src: "/assets/covers/cover7.jpg" },
      { src: "/assets/covers/cover8.jpg" },
      { src: "/assets/covers/cover9.jpg" },
    ];
    const handleNext = () => {
      if (currentSlide === covers.length - 3) {
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
  
    return (
      <div className="w-full flex flex-col gap-10 ">
        <div className="border border-[#C38F79] flex w-full h-20 gap-2 items-center ">
          <div className="w-20 h-20 border-t border-[#C38F79] items-center flex justify-center rotate-90">
            <ArrowRightAltIcon fontSize="large" />
          </div>
          <h2 className="ml-6 text-white text-4xl">Featured Magazines</h2>
        </div>
        <div className="flex flex-col h-[400px] w-full">
          <div className="flex gap-5">
            {covers.map((cover, idx) => (
              <div className=" h-[400px] " key={idx}>
                <img className="w-full h-full object-cover" src={cover.src} alt={`Model ${idx + 1}`} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <div
              onClick={handlePrev}
              className="cursor-pointer border-gray-400 border p-3 rounded-full"
            >
              <ArrowBackIcon />
            </div>
            <div
              onClick={handleNext}
              className="border-gray-400 border p-3 rounded-full"
            >
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Magazines
