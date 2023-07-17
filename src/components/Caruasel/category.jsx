import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Card({ img, text }) {
  return (
    <>
      <div
        className="category-card"
        style={{
          width: 200,
          height: 80,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: 10,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={img} alt="" style={{ width: 60, marginRight:25 }} />
        <p style={{ fontSize: 15, }}>{text}</p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Swiper
      watchSlidesProgress={true}
      slidesPerView={6}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Card
          img={"https://texnomart.uz/_nuxt/img/kondicionery.dd448f3.svg"}
          text={"Кондиционеры"}
        ></Card>
      </SwiperSlide>

      <SwiperSlide>
        <Card
          img={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/smartfon.svg"}
          text={"Телефон"}
        ></Card>
      </SwiperSlide>

      <SwiperSlide>
        <Card
          img={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg"}
          text={"Пылисосы"}
        ></Card>
      </SwiperSlide>

      
      <SwiperSlide>
        <Card
          img={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg"}
          text={"Планшеты"}
        ></Card>
      </SwiperSlide>

      <SwiperSlide>
        <Card
          img={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg"}
          text={"Холодильники"}
        ></Card>
      </SwiperSlide>

      <SwiperSlide>
        <Card
          img={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg"}
          text={"Телевизоры"}
        ></Card>
      </SwiperSlide>

      <SwiperSlide>
        <Card
          img={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg"}
          text={"Фены"}
        ></Card>
      </SwiperSlide>

      
      <SwiperSlide>
        <Card
          img={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg"}
          text={"Стыральные машины"}
        ></Card>
      </SwiperSlide>

    </Swiper>
    
  );
}
