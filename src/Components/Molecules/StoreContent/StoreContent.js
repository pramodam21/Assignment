import React from "react";
import Style from "./Style.module.css";
import StoreHeading from "../StoreHeading/StoreHeading";
import StorePayInfo from "../StorePayInfo/StorePayInfo";
import StoreData from "../StoreData/StoreData";
import ImageData from '../ImageData/ImageData';
import About from "../AboutStore/About";

const StoreContent = () => (
  <div className={Style.container}>
      <StoreHeading />
      <StorePayInfo />
      <hr/>
      <StoreData />
      <hr/>
      <ImageData />
      <About />
  </div>
);

export default StoreContent;
