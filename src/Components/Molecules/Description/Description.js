import React from "react";
import Style from "./Style.module.css";
import HeaderContent from "../DescriptionHeader/HeaderContent";
import Location from '../Location/Location';

const Description = () => (
  <div className={Style.container}>
    <HeaderContent />
    <Location />
  </div>
);

export default Description;
