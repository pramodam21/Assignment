import React from "react";
import Style from "./Style.module.css";
import Constants from "../../../contents.json";
import Right from "../../../assets/Images/right_arrow.svg";
import Time from "../../../assets/Images/icn_time.svg";
import Money from "../../../assets/Images/icn_money.svg";
import Scooter from "../../../assets/Images/icn_scooter.svg";
import { Link } from "react-router-dom";
import Button from "../../Atoms/StatusButton/Button";
import Info from "../../Atoms/Info/Info";

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
          <span className={Style.subHeading}>
            {Constants.header.subHeading}
          </span>
          <span className={Style.split}>|</span>
          <Button image={Time} status={Constants.header.status} />
        </div>
        <div className={Style.wrapper}>
          <Info image={Money} info={Constants.header.order} />
          <Info image={Scooter} info={Constants.header.time} />
        </div>
      </div>
    )}
  </div>
);

export default HeaderContent;
