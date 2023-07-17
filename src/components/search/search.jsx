import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Search() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value.length > 3) {
      axios
        .get( `https://dummyjson.com/products/search?q=${value}`)
        .then((res) => setData(res.data))
        .catch((ee) => {
          console.log(ee);
        });
    }
    
  }, [value]);
  console.log(value);
  console.log(data);
  return (
    <div
      style={{
        background: "aqua",
        width: "100vw",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: 20,
          width: 500,
          border: "none",
          outline: "none",
          borderRadius: 50,
        }}
      />
      {data?.products?.length > 0 && value !== "" ? (
        <div
          style={{
            width: 500,
            background: "white",
            marginTop: 20,
            position: "absolute",
            top: 430,
          }}
        >
          {data?.products?.map((i) => (
            <li style={{ margin: 10, listStyle: "none" }}>{i.title}</li>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}