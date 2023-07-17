import React from "react";
import "./Brandcard.css";
export default function Brandcard({image}) {
  return (
      <>
        {" "}
        <div className="brand-box">
          <img src={image} alt="" />
        
        </div>
      </>
  );
}
