import React from "react";
import Style from "./Style.module.css";
import Constants from "../../../contents.json";

const About = () => (
  <>
    {Constants && (
      <div className={Style.container}>
        <span className={Style.heading}>{Constants.description}</span>
        <p className={Style.description}>{Constants.information}</p>
      </div>
    )}
  </>
);

export default About;
