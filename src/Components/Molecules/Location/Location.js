import React from "react";
import Style from "./Style.module.css";
import Pin from "../../../assets/Images/icn_pin.svg";

// Strings are hardcoded as of now. It will be replaced with the API response.

const Location = () => (
  <div className={Style.container}>
    <div className={Style.wrapper}>
      <span className={Style.heading}>Delivering food to</span>
      <div className={Style.pin}>
        <img src={Pin} alt="pin" />
        <div className={Style.userLocation}>
          <span className={Style.location}>Trade Centre Area 1, Sh…</span>
          <button className={Style.button}>Change</button>
        </div>
      </div>
    </div>
  </div>
);

export default Location;
