import React from "react";
import "./Wrapper.css";
import { SWrapper } from "./Wrapper.styled";

const Wrapper = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Wrapper;
