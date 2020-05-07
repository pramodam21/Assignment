import React from "react";
import Style from "./Style.module.css";

const PriceInfo = ({ heading, info }) => (
  <div className={Style.wrapper}>
    <h4 className={Style.heading}>{heading}</h4>
    <span className={Style.info}>{info}</span>
  </div>
);

export default PriceInfo;
