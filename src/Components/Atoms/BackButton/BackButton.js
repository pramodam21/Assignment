import React from "react";
import Back from "../../../assets/Images/back_arrow.svg";
import Style from "./Style.module.css";
import { Link } from "react-router-dom";

const BackButton = () => (
  <Link to="/">
    <img className={Style.back} src={Back} alt="back" />
  </Link>
);

export default BackButton;
