import React from "react";
import Index from "../../components/header";
import Banner from "../../components/Caruasel/banner";
import Brand from "../../components/Caruasel/Brand";
import Brandcard from "../../components/card/Brandcard";
import Category from "../../components/Caruasel/category";
import ProductCarusel from "../../components/Caruasel/productCarusel";
import ProductDetails from "./productDetails";
export default function index() {
  return (
    <div>
      <Index></Index>
      <Banner></Banner>
      <Brand></Brand>
      <Category></Category>
      <ProductCarusel></ProductCarusel>
      
    </div>
  );
}
