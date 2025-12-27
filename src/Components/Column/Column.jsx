import React from "react";
import "./Column.css";

const Column = ({ children, status }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="card">{children}</div>
    </div>
  );
};

export default Column;
