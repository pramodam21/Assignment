import React from "react";
import "./Style.scss";

const OrderDetails = () => (
  <div className="container">
    <div className="wrapper">
      <h4 className="order">1 Item | AED27.00</h4>
      <div>
        <span className="subHeading">Inclusive of Taxes</span>
        <span className="details">Details</span>
      </div>
    </div>
  </div>
);

export default OrderDetails;
