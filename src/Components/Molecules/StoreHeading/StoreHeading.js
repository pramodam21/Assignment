import React, { Fragment } from "react";
import Constants from "../../../contents.json";
import CommonStyle from "../../../Css/common.module.css";
import Style from './Style.module.css';

const StoreHeading = () => (
  <Fragment>
    {Constants.storeInfo && (
      <div className={Style.wrapper}>
        <h3 className={CommonStyle.heading}>{Constants.storeInfo.heading}</h3>
        <div>
          <span className={Style.city}>{Constants.storeInfo.city}</span>
          <span className={Style.dot}>.</span>
          <span className={CommonStyle.info}>{Constants.storeInfo.info}</span>
        </div>
        <hr className={CommonStyle.hrLine} />
      </div>
    )}
  </Fragment>
);

export default StoreHeading;
