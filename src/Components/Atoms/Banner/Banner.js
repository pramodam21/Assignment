import React from "react";
import BannerImg from "../../../assets/Images/img_banner.png";
import Style from "./Style.module.css";

const Banner = () => (
  <img className={Style.banner} src={BannerImg} alt="banner" />
);

export default Banner;
