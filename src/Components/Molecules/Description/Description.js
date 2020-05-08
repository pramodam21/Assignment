import React from "react";
import Style from "./Style.module.css";
import HeaderContent from "../DescriptionHeader/HeaderContent";
import Location from '../Location/Location';
import FoodItem from '../FoodItem/FoodItem';

const Description = () => (
  <div className={Style.container}>
    <HeaderContent />
    <Location />
    <FoodItem />
  </div>
);

export default Description;
