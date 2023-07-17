import React from "react";
import "./block.css";
import { HiOutlineMicrophone } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import {BsBoxSeam} from "react-icons/bs";
import {FaBalanceScaleLeft} from "react-icons/fa";
import {VscHeart} from "react-icons/vsc";
import {FiShoppingCart} from "react-icons/fi"
import Modal from "../modal"
export default function block() {
  return (
    <div>
      <>
        {" "}
        <div className="tex-catalog">
          <div className="texnomart"> 
            <h1>texnomart*</h1>
          </div> 
          <div className="tex-search">
            <select>
              <option value="Все категории">Все категории</option>
              <option value="Техника для дома">Техника для дома</option>
              <option value="Офысная техника">Офысная техника</option>
              <option value="">Посуды для дома</option>
             
            </select> 
            <div className="tex-icons">
               {" "}
                <a href=""> <HiOutlineMicrophone></HiOutlineMicrophone><BsSearch></BsSearch></a>
              </div>
          </div>
          <div className="tex-page">
            <a href=""><BsBoxSeam></BsBoxSeam> Статус заказа</a>
             <Modal></Modal>
            <a href=""><FaBalanceScaleLeft></FaBalanceScaleLeft> Сравнение</a>
            <a href=""><VscHeart></VscHeart>Избранное</a>
            <a href=""> <FiShoppingCart></FiShoppingCart>Корзина</a>
          </div>
        </div>
      </>
    </div>
  );
}
