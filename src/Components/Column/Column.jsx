import React from "react";
import { cardList } from "../../data";
import Card from "../Card/Card";
import { MainColumn, ColumnTitle, StyleContainer } from "./Column.styled";
const Column = ({ title }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <StyleContainer>
        {cardList
          .filter((item) => item.status === title)
          .map((item) => (
            <Card item={item} key={item.id} />
          ))}
      </StyleContainer>
    </MainColumn>
  );
};

export default Column;
