import React from "react";
import "./header.css";
import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="header-container">
        <div className="header-block">
          <div className="icon">
            <CiLocationOn></CiLocationOn>
            <select>
              {" "}
              <option value=" Ташкент">Ташкент</option>
              <option value="Samarkand">Samarkand</option>
              <option value="Buxara">Buxara</option>
              <option value="Andijan">Andijan</option>
            </select>
          </div>
          <a href="">наши магазины </a>
          <a href="">Юридичиским лицам</a>
          <a href="">покупка рассрочку</a>
          <a href="">способы оплаты</a>
        </div>
        <div className="header-block2">
          {" "}
          <a href="">контакт:+99899 234-48-85</a>
          <button>{t("description.part2")}</button>
          <select>
            {" "}
            <option onClick={()=>i18n.changeLanguage("en")} value="ru">RU</option>
            <option onClick={()=>i18n.changeLanguage("de")}value="uz">UZ</option>
          </select>
        </div>
      </div>
    </>
  );
}
