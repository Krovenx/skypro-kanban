import React from "react";
import "./Column.css";
import { cardList } from "../../data";
import Card from "../Card/Card";
import CardLoader from "../Loadering/CardLoader";

const Column = ({ loading, title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="card">
        {cardList
          .filter((item) => item.status === title)
          .map((item, i) =>
            loading ? (
              <CardLoader key={i} />
            ) : (
              <Card item={item} key={item.id} />
            )
          )}
      </div>
    </div>
  );
};

export default Column;
