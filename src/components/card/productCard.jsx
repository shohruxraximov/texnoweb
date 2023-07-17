// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "./productCard.css";
// import { FiShoppingCart } from "react-icons/fi";
// import { VscHeart } from "react-icons/vsc";
// import { FaBalanceScaleLeft } from "react-icons/fa";
// import { MdAddShoppingCart } from "react-icons/md";
// // import required modules
// import { Navigation } from "swiper";
// import Brandcard from "./Brandcard";
// export default function ProductCard() {
//     const [name, setName] = useState(0);
//     function Increase() {
//       setName(name + 1);
//     }
//     function Decrease() {
//       setName(name - 1);
//     }
// // export default function App({ image }) {
//   return (
//     <>
//       <br />
//       <span>
//         <h3>Климатическая техника</h3>
//       </span>
//       <div className="productCard">
//         <img
//           src="data:image/jpeg;base64,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"
//           alt=""
//         />
//         <p>Кондиционер AUX ASW</p> <h5>6 361 000 сум</h5>{" "}
//         <div className="productCard-box">
//           <button>
//             <FiShoppingCart></FiShoppingCart> В корзину
//           </button>{" "}
//           <VscHeart></VscHeart> <FaBalanceScaleLeft></FaBalanceScaleLeft>{" "}
//         </div>
//         <div className="product-shop">
//           <div className="product-shop1">

//             <button>
//               <MdAddShoppingCart></MdAddShoppingCart>{" "}
//             </button>
//           </div>
//           <button>
//             <span onClick={Decrease}>-</span>
//             <span>0</span>
//             <span  onClick={Increase}>+</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import "./productCard.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function ProductCard({image,title,price,description,id}) {
  const [name, setName] = useState(0);
  function Increase() {
    setName(name + 1);
  }
  function Decrease() {
    setName(name - 1);
  }
  return (
    <div className="product-card">
      <span>
        {" "}
        <h3>Климатическая техника</h3> <br />
      </span>
      <img
        src={image}
        alt=""
        style={{ width: 250,height:150}}
      />
 
 <h4><Link style={{color:"black"}} to={`/product/${id}`}>{title}</Link></h4> <p>{description}</p> <h5>${price}</h5>
   
      {name == 0 ? (
        <div className="product-icons">
          <button onClick={Increase}>
            <FiShoppingCart></FiShoppingCart> В корзину
          </button>
        </div>
      ) : (
        <div className="product-shop">
          <button>
            {" "}
            <span onClick={Increase}>+</span>
            <span>{name}</span>
            <span onClick={Decrease}>-</span>
          </button>
        </div>
      )}
    </div>
  );
}
