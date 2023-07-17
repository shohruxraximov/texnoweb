import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./productCarusel.css";
import ProductCard from "../../components/card/productCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function App() {
  
  const [data, setData] = useState();
  // const getData = async () => {
  //   await axios
  //     .get('https://dummyjson.com/products')
  //     .then((res) => setData(res.data));
  // };
  useEffect(() => {
    
  try{
  axios
    .get(`https://dummyjson.com/products/`)
    .then((res) => setData(res.data));
    } catch(err){
    }
 
  }, []);

  console.log("product data", data?.products);
  return (
    <>
      <div className="product-carusel">
        {" "}
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          className="mySwiper"
        >
          {data?.products?.map((item) => (
            <SwiperSlide>
              <ProductCard
                id={item.id}
                image={item.thumbnail}
                title={item.title}
                price={item.price}
                description={item.description}
              ></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          className="mySwiper"
        >
          {data?.products?.map((item) => (
            <SwiperSlide>
              <ProductCard
                image={item.thumbnail}
                title={item.title}
                price={item.price}
                description={item.description}
              ></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
