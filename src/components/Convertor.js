import React, { useState } from "react";
import "./Convertor.css";

export default function Convertor() {
  const [fah, setFah] = useState("");
  const [celcius, setCelcius] = useState("");

  function fahChangeHandler(e) {
    const temp = e.target.value;
    setFah(temp);
    celciusConvertor(temp);
  }

  function celciusConvertor(temp) {
    setCelcius((((temp - 32) * 5) / 9).toFixed(1));
  }
  return (
    <div className="conv-body">
      <h1>Temperature Convertor</h1>
      <div className="content">
        <input value={fah} onChange={fahChangeHandler} />
        {fah && <p>Celcius : {celcius}</p>}
      </div>
    </div>
  );
}
