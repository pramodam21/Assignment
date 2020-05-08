import React from "react";
import Style from "./Style.module.css";
import Food from "../../../assets/Images/food_item.png";
import Minus from '../../../assets/Images/minus.svg';
import Plus from '../../../assets/Images/plus.svg';
import Common from '../../../Css/common.module.css';

// Used the hardcoded strings which will be replaced with the response from API

const FoodItem = () => (
  <div className={Style.container}>
    <div className={Style.foodContainer}>
      <img src={Food} alt="food" />
      <div className={Style.content}>
        <h4 className={Style.heading}>New Chicken Maharaja Mac</h4>
        <span className={Common.subHeading}>Burgers & Wraps</span>
        <div className={Style.buttonContainer}>
          <div className={Style.priceWrapper}>
            <span className={Style.price}>AED27.00</span>
            <button className={Style.modification}>Customize</button>
          </div>
          <div className={Style.button}>
            <img src={Minus} alt="minus" />
            <span className={Style.buttonCount}>1</span>
            <img src={Plus} alt="minus" />
          </div>
        </div>
      </div>
    </div>
    <hr className={Common.hrLine} />
  </div>
);

export default FoodItem;
