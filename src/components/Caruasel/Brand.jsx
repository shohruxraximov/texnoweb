import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./brand.css";

import Brandcard from "../card/Brandcard";
export default function App() {
  return (
    <>
    <div className="brand">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={8}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101404542676301.webp"
            }
          ></Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101404154940058.webp"
            }
          >
            {" "}
          </Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101404481916020.webp"
            }
          >
            {" "}
          </Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2023042606014581630.webp"
            }
          >
            {" "}
          </Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101405315369098.webp"
            }
          >
            {" "}
          </Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101404183539183.webp"
            }
          >
            {" "}
          </Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101404450190315.webp"
            }
          >
            {" "}
          </Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101404474125545.webp"
            }
          >
            {" "}
          </Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101404240931733.webp"
            }
          ></Brandcard>
        </SwiperSlide>
        <SwiperSlide>
          <Brandcard
            image={
              "https://backend.texnomart.uz//images/brands/2022101404461797247.webp"
            }
          ></Brandcard>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
