import React, { Fragment } from "react";
import Banner from "../Atoms/Banner/Banner";
import BackButton from "../Atoms/BackButton/BackButton";
import StoreContent from "../Molecules/StoreContent/StoreContent";

const StoreInfo = () => (
  <Fragment>
      <BackButton />
      <Banner />
      <StoreContent />
  </Fragment>
);

export default StoreInfo;
