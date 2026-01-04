import React from "react";
import "./Main.css";
import Column from "../Column/Column";
import { LoadingText } from "../Loadering/CardLoadering.styled";
import { SMain, MainBlock, MainContent } from "./Main.styled";
import {Container} from '../Header/Header.styled';
const Main = ({ loading }) => {
  return (
    <SMain>
      <Container>
        {loading ? (
          <div className="loading-container">
            <LoadingText>Данные загружаются...</LoadingText>
          </div>
        ) : (
          <MainBlock>
            <MainContent>
              {[
                "Без статуса",
                "Нужно сделать",
                "В работе",
                "Тестирование",
                "Готово",
              ].map((title) => (
                <Column loading={loading} title={title} key={title} />
              ))}
            </MainContent>
          </MainBlock>
        )}
      </Container>
    </SMain>
  );
};

export default Main;
