import Loader from "./Loader";

import React from "react";
import "./Loader.css";
const CardLoader = () => {
  return (
    <div className="card-loader">
      <div className="loader-wrapper">
        <Loader />
        <Loader width={164} />
      </div>
      <Loader width={81} height={15} />
    </div>
  );
};

export default CardLoader;
