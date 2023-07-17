import React from "react";
import "./MobileHeader.css";
import { CiLocationOn } from "react-icons/ci";
import { BiPhone } from "react-icons/bi";
export default function MobileHeader() {
  return (
    <div className="mobile-header">
      <div className="mobile-icon">
        <CiLocationOn></CiLocationOn>
        <select>
          {" "}
          <option value=" Ташкент">Ташкент</option>
          <option value="samarkand">samarkand</option>
          <option value="buxara">buxara</option>
        </select>
      </div>

      <div className="mobile-h1">
        <h1>Texnomart*</h1>
      </div>
      <div className="mobile-phone">
        <BiPhone></BiPhone>
       <a href="">+99899 234 48 85</a>
       </div> 
      
    </div>
  );
}
