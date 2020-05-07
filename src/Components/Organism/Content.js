import React, { Fragment } from "react";
import Header from "../Atoms/Header/Header";
import Banner from "../Atoms/Banner/Banner";
import Description from "../Molecules/Description/Description";

/**
 * Returns Order selection components
 */
const Content = () => (
  <Fragment>
    <Header />
    <Banner />
    <Description />
  </Fragment>
);

export default Content;
