import React from "react";
import Style from "./Style.module.css";
import Constants from "../../../contents.json";
import PriceInfo from "../../Atoms/PriceInfo/PriceInfo";

const StorePayInfo = () => (
  <div className={Style.payInfo}>
    {Constants &&
      Constants.payInfo.map((ele) => (
        <PriceInfo heading={ele.heading} info={ele.info} />
      ))}
  </div>
);

export default StorePayInfo;
