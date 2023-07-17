import React from 'react'
import "./block2.css"
import {GrAppsRounded} from "react-icons/gr"
import {BsFire} from "react-icons/bs"
import {FaRegSnowflake} from "react-icons/fa"
export default function block2() {
  return (
    <div>
      <><div className="tex-block2"><button><GrAppsRounded></GrAppsRounded>   Каталог</button>
      <a href=""><BsFire color='red'></BsFire>Акции</a>
      <a href=""><FaRegSnowflake></FaRegSnowflake>  Кондиционеры</a>
      <a href="">Смартфоны</a>
      <a href="">Холодильники</a>
      <a href="">Пылисосы</a>
      <a href="">Ноутбуки</a>
      <a href="">Телевизоры</a>
      <a href="">Все категории</a>
      </div>
      </>
    </div>
  )
}

