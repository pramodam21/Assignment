import React from "react";
import Style from "./Style.module.css";

const StoreLocate = ({ image, heading, data }) => (
  <div className={Style.container}>
    <img src={image} />
    <span className={Style.heading}>{heading}</span>
    <div>
      <span className={Style.data}>{data}</span>
    </div>
  </div>
);

export default StoreLocate;
