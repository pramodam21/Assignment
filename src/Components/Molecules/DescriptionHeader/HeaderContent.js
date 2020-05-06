import React from "react";
import Style from "./Style.module.css";
import Constants from "../../../contents.json";
import Right from "../../../assets/Images/right_arrow.svg";
import Time from "../../../assets/Images/icn_time.svg";
import Money from "../../../assets/Images/icn_money.svg";
import Scooter from '../../../assets/Images/icn_scooter.svg';
import { Link } from "react-router-dom";

const HeaderContent = () => (
  <div className={Style.container}>
    {Constants.header && (
      <div>
        <div className={Style.headingWrapper}>
          <h3 className={Style.heading}>{Constants.header.heading}</h3>
          <Link to="/storeInfo">
          <img src={Right} alt="arrow" />
          </Link>
        </div>
        <div>
          <span className={Style.subHeading}>{Constants.header.subHeading}</span>
          <span className={Style.split}>|</span>
          <button className={Style.button}>
            <img src={Time} alt="time" />
            <span className={Style.buttonText}>
            {Constants.header.status}
            </span>
          </button>
        </div>
        <div className={Style.wrapper}>
          <div className={Style.info}>
            <img src={Money} alt="money" />
            <span className={Style.infoContent}>{Constants.header.order}</span>
          </div>
          <div className={Style.info}>
            <img src={Scooter} alt="scooter" />
            <span className={Style.infoContent}>{Constants.header.time}</span>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default HeaderContent;
