import React from "react";
import Style from "./Style.module.css";
import image1 from "../../../assets/Images/image_1.png";
import image2 from "../../../assets/Images/image_2.png";
import image3 from "../../../assets/Images/image_3.png";

// In real case senario image URL will be from API. But for time being I have made use of this array.
const imgUrl = [image1, image2, image3];

const ImageData = () => (
  <div className={Style.container}>
    {imgUrl && imgUrl.map((img) => <img className={Style.img} src={img} alt="image" />)}
  </div>
);

export default ImageData;
