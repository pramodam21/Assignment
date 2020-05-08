import React from "react";
import Style from "./Style.module.css";
import HeaderContent from "../DescriptionHeader/HeaderContent";
import Location from '../Location/Location';
import FoodItem from '../FoodItem/FoodItem';
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderBtn from "../../Atoms/OrderButton/OrderBtn";

const Description = () => (
  <div className={Style.container}>
    <HeaderContent />
    <Location />
    <FoodItem />
    <OrderDetails />
    <OrderBtn />
  </div>
);

export default Description;
