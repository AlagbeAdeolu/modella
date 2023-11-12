import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Models = () => {
  const models = [
    { src: "/assets/model.jpg" },
    { src: "/assets/model2.jpg" },
    { src: "/assets/model3.jpg" },
    { src: "/assets/model8.jpg" },
    { src: "/assets/model4.jpg" },
    { src: "/assets/model6.jpg" },
    { src: "/assets/model5.jpg" },
    { src: "/assets/model7.jpg" },
  ];
  return (
    <div className="my-6 flex gap-10 flex-col items-center justify-center">
      <div className="border border-[#C38F79] flex w-full h-20 gap-2 items-center">
        <div className="w-20 h-20 border-t border-[#C38F79] items-center flex justify-center rotate-90">
          <ArrowRightAltIcon fontSize="large" />
        </div>
        <h2 className="ml-6 text-white text-4xl">
          You bring the brand, we bring the <span className="text-[#BE8A74]">models</span>
        </h2>
      </div>
      <div className="w-full flex mb-8 gap-6">
        <div className="flex w-1/4 gap-6 flex-col">
          <img
            src={models[0].src}
            alt="models"
            className="object-cover h-[250px] w-\full] bg-gray-700"
          />
          <img
            src={models[1].src}
            alt="models"
            className="object-cover  w-full flex-1 bg-gray-700"
          />
        </div>
        <div className="flex w-1/4 gap-6 flex-col-reverse">
          <img
            src={models[2].src}
            alt="models"
            className="object-cover h-[250px] w-full bg-gray-700"
          />
          <img
            src={models[3].src}
            alt="models"
            className="object-cover w-full flex-1 bg-gray-700"
          />
        </div>
        <div className="flex w-1/4 gap-6 flex-col">
          <img
            src={models[4].src}
            alt="models"
            className="object-cover h-[250px] w-full bg-gray-700"
          />
          <img
            src={models[5].src}
            alt="models"
            className="object-cover w-full flex-1 bg-gray-700"
          />
        </div>
        <div className="flex w-1/4 gap-6 flex-col-reverse">
          <img
            src={models[6].src}
            alt="models"
            className="object-cover h-[250px] w-full bg-gray-700"
          />
          <img
            src={models[7].src}
            alt="models"
            className="object-cover w-full flex-1 bg-gray-700"
          />
        </div>
      </div>
    </div>
  );
};
export default Models;
