import React, { useState } from "react";
import "./input.css";
import axios from "axios";
export default function Input() {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState();
  function submit(e) {
    e.preventDefault();
    axios
      .post("https://dummyjson.com/users/add", {
        firstName: value,
        lastName: pass,
        age: 250,
      })
      .then((res) => setData(res.data));
  }  
  console.log("VALUE", value);
  console.log("Pass", pass);
  console.log("data", data);
  return (
    <div
      style={{
        borderRadius: 20,
        height: 400,
        width: 400,
        textAlign: "center",
        border: "2px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        marginTop: 200,
      }}
    >
      <form action="">
        <h1>Регистрация </h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <br />
        <button
          style={{
            color: "black",
            backgroundColor: "orange",
            borderRadius: 10,
            height: 40,
            width: 200,
          }}
          onClick={(e) => submit(e)}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
