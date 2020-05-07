import React from "react";
import Style from "./Style.module.css";

const Button = ({ image, status }) => (
  <button className={Style.button}>
    <img src={image} alt="time" />
    <span className={Style.buttonText}>{status}</span>
  </button>
);

export default Button;
