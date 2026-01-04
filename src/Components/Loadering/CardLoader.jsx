import Loader from "./Loader";
import React from "react";
import "./Loader.css";
import { SCardLoader, LoaderWrapper } from "./CardLoadering.styled";

const CardLoader = () => {
  return (
    <SCardLoader>
      <LoaderWrapper>
        <Loader />
        <Loader width={164} />
      </LoaderWrapper>
      <Loader width={81} height={15} />
    </SCardLoader>
  );
};

export default CardLoader;
