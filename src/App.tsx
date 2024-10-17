import React from "react";
import "./style.css";
import img from "./a.png";
import svg from './a.svg';

export default function App() {
  return (
    <>
      <h1>react webpack app</h1>
      <img src={img} width={100} height={100} alt="example" />
      <img src={svg} alt="example" width={100} height={100} />
    </>
  );
}
