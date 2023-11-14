import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Models = () => {
  const models = [
    { src: "/assets/model.jpg", name: "Tomi Lanre" },
    { src: "/assets/model2.jpg", name: "Ruth Arthur" },
    { src: "/assets/model6.jpg", name: "Tobi Amusan" },
    { src: "/assets/model8.jpg", name: "Eliza Smith" },
    { src: "/assets/model3.jpg", name: "Aminat Sheikh" },
    { src: "/assets/model7.jpg", name: "Kehinde Adams" },
    { src: "/assets/model5.jpg", name: "Xi Pei" },
    { src: "/assets/model4.jpg", name: "Bella Alvarez" },
  ];

  const ModelColumn = ({ images, rev }) => (
    <div className={`flex h-[600px] w-1/4 gap-6 ${rev ? "flex-col-reverse" : "flex-col"}`}>
      {images.map((model, index) => (
        <div key={index} className="group relative overflow-hidden">
            <img
              
              src={model.src}
              alt={`model-${index}`}
              className={`object-cover ${index === 0 ? "h-[250px]" : "flex-1"} w-full bg-gray-700 transform transition-transform duration-1000 group-hover:scale-110 `}
            />
            <div className="absolute bg-gray-800 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70 transition-opacity duration-300">
            <p className="text-[#d19176] font-bold text-lg">{model.name}</p>
          </div>

        </div>
      ))}
    </div>
  );

  return (
    <div className="my-6 flex flex-col items-center justify-center">
      <div className="border border-[#C38F79] flex w-full h-20 gap-2 items-center">
        <div className="w-20 h-20 border-t border-[#C38F79] items-center flex justify-center rotate-90">
          <ArrowRightAltIcon fontSize="large" />
        </div>
        <h2 className="ml-6 text-white text-4xl">
          You bring the brand, we bring the{" "}
          <span className="text-[#BE8A74]">models</span>
        </h2>
      </div>
      <div className="w-full flex mb-8 gap-6">
        <ModelColumn images={[models[0], models[1]]} />
        <ModelColumn rev images={[models[2], models[3]]} />
        <ModelColumn images={[models[4], models[5]]} />
        <ModelColumn rev images={[models[6], models[7]]} />
      </div>
    </div>
  );
};





export default Models;
