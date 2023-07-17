import "./productDetails.css";
import { RiFontSize, RiStarSFill } from "react-icons/ri";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { VscHeart } from "react-icons/vsc";
import { colors } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import FitnesCarusel from "../../components/Caruasel/FitnesCarusel";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  console.log("id", id);
  const [data, setData] = useState();

  useEffect(() => {
    try{
  
     const res = axios
        .get(`https://dummyjson.com/products/${id}`)
            .then((res) => setData(res.data)).catch(err=>{
            console.log(err);});
        console.log(res);
    } catch (err){
    }
 
  }, [id, data]);
  console.log("datas", data?.description?.price);
  return (
    <>
      {" "}
      <div style={{ background: "#fff" }}>
       
        
        
      </div>
      <div className="product-head">
        <div className="product-button">
          <button>Главная</button>
          <button>Каталог товаров</button>
          <button>Телефон и гаджети</button>
          <button>Фитнес браслетъ</button>
          <button>Фитнес браслет Xiaomi MI Band 7 Pro Black</button>
        </div>
        <h2>{data?.title}</h2> <br />
        <div className="productDatail">
          <ul> 
            <li>
              <RiStarSFill></RiStarSFill>
              <RiStarSFill></RiStarSFill>
              <RiStarSFill></RiStarSFill>
              <RiStarSFill></RiStarSFill>
              <RiStarSFill></RiStarSFill>
              <RiStarSFill></RiStarSFill>{" "}
            </li>
            <li>
              <VscHeart></VscHeart>Избранное
            </li>
            <li>
              <FaBalanceScaleLeft></FaBalanceScaleLeft> Сравнение
            </li>
          </ul>
        </div>
      </div>
      <div className="fitnes-slide">
        <FitnesCarusel image={data?.images}></FitnesCarusel>
        <div className="fitnes-description">
          <p>
            {" "}
            <br />
            <h3>Коротко о товаре</h3> <br /> <br />
            Бренд .................. {data?.brand} <br /> <br />
            {data?.description} <br />
            <br />
            Минимальная поддерживаемая версия Android..........6 <br /> <br />
            Минимальная поддерживаемая версия iOS...........10 <br /> <br />
            Тип экрана ............AMOLED
          </p> <br />
          <p>Цена ${data?.price}</p>
        </div>
      </div>
    </>
  );
}
