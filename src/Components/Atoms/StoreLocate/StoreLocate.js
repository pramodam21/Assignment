import React from "react";
import Style from "./Style.module.css";

const StoreLocate = ({ image, heading, data, cssClass }) => {
  const className = cssClass ? Style.location : Style.status;
  return(
  <div className={Style.container}>
    <img src={image} />
    <span className={Style.heading}>{heading}</span>
    <div>
      <span className={className}>{data}</span>
    </div>
  </div>
  );
}

export default StoreLocate;
