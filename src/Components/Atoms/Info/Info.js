import React from "react";
import Style from "./Style.module.css";

const Info = ({ image, info }) => (
  <div className={Style.info}>
    <img src={image} alt="money" />
    <span className={Style.infoContent}>{info}</span>
  </div>
);

export default Info;
