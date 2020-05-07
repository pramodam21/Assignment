import React from "react";
import Style from "./Style.module.css";
import StoreHeading from "../StoreHeading/StoreHeading";
import StorePayInfo from "../StorePayInfo/StorePayInfo";

const StoreContent = () => (
  <div className={Style.container}>
      <StoreHeading />
      <StorePayInfo />
      <hr/>
  </div>
);

export default StoreContent;
