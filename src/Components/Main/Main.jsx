import React from "react";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
