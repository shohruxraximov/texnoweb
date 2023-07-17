import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./banner.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/uploads/slides/979803Artboard_rus1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/uploads/slides/987971Artboard_rus1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/uploads/slides/1106491920ru.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/uploads/slides/3531501920ru.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://backend.texnomart.uz/uploads/slides/322865Artboard_rus1.webp" />
        </SwiperSlide>
        <SwiperSlide><img src="https://backend.texnomart.uz/uploads/slides/425065Artboard_rus1.webp"  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
