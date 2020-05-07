import React from "react";
import Style from "./Style.module.css";
import StoreLocate from "../../Atoms/StoreLocate/StoreLocate";
import Time from '../../../assets/Images/time_icon.svg';
import Map from '../../../assets/Images/icn_map.svg';

const StoreData = () => (
  <div className={Style.container}>
      <StoreLocate image={Time} heading="TIMINGS" data="Opens Now" />
      <span className={Style.split}></span>
      <StoreLocate cssClass image={Map} heading="LOCATION" data="View Map" />
  </div>
);

export default StoreData;
