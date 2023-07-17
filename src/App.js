import "./App.css";
import Index from "./pages/home/index";
import ProductDetails from "./pages/home/productDetails";
import { Dna } from "react-loader-spinner";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./components/search/search";
import Input from "./components/input";

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true)
  //    setTimeout(() => {
  //   setLoading(false)},5000);
  // }, []);
  return (
    <div className="app">
      {}

      {/* {loader?<Loader/>:} */}

      <Routes>
        <Route path="/" element={<Index></Index>}>
          {" "}
        </Route>
        <Route path="product/:id" element={<ProductDetails></ProductDetails>} />
      </Routes>
      
      <Input></Input>
    </div>
  );
}

export default App;
