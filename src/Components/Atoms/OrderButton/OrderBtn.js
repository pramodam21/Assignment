import React from "react";
import "./Style.scss";
import Arrow from '../../../assets/Images/arrow_btn.svg';

const OrderBtn = () => (
<button className="button">
<span className="orderHeading">My Order</span>
<img src={Arrow} alt="arrow" />
</button>
);

export default OrderBtn;
