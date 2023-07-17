import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./fitnesCarusel.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function App({image}) {
  return (
    <>
      <div className="fitnes-swiper">
        <Swiper
          autoHeight={true}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {image?.map(item=> <SwiperSlide>
            
            <img
              src={item}
              alt=""
            />
          </SwiperSlide>)}
         
         
        </Swiper>
      </div>
    </>
  );
}
