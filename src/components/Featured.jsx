import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Featured = () => {
  const runways = [
    { src: "/assets/runways/runwayModel2.jpg", name: "Laura Delvey" },
    { src: "/assets/runways/runwayModel3.jpg", name: "Sophia Alberto" },
    { src: "/assets/runways/runwayModel.jpg", name: "Gbemi Okusanya" },
  ];
  return (
    <div>
      <div className="border border-[#C38F79] flex w-full h-20 gap-2 items-center">
        <div className="w-20 h-20 border-t border-[#C38F79] items-center flex justify-center rotate-90">
          <ArrowRightAltIcon fontSize="large" />
        </div>
        <h2 className="ml-6 text-white text-4xl">Featured Runways</h2>
      </div>
      <div className="my-6 h-[600px]">
        <div className="">
          <Swiper
            // modules={[Pagination]}
            // spaceBetween={1}
            // slidesPerView={1}
            // pagination={{
            //   clickable: true,
            // }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {runways.map((item, idx) => (
              <div classname="relative w-full h-full" key={idx}>
                <SwiperSlide virtualIndex={idx}>
                  <div className="relative">
                    <div style={{ backgroundImage: `url(${item.src})` }} className="absolute top-0 left-0 h-full -z-10 bg-center blur-lg"></div>
                    <div className="flex items-center">
                      <div className="uppercase px-10 text-2xl">
                        <p>{item.name}</p>
                      </div>
                      <img
                        className="h-[600px]  "
                        src={item.src}
                        alt={item.name}
                      />
                      <div className="uppercase px-10 text-2xl">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Featured;
