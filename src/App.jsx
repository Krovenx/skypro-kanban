import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Column from "./Components/Column/Column";
import Card from "./Components/Card/Card";
import PopExit from "./Components/Popups/PopExit/PopExit";
import PopNew from "./Components/Popups/PopNew/PopNew";
import PopBrowse from "./Components/Popups/PopBrowse/PopBrowse";
import Wrapper from "./Components/Wrapper/Wrapper";
import { cardList } from "./data";

function App() {
  const [popUser, setPopUser] = useState(false);

  return (
    <Wrapper>
      <PopExit />
      <PopNew />
      <PopBrowse />
      <Header popUser={popUser} setPopUser={setPopUser} />

      <Main>
        <Column status={cardList[0].status}>
          <Card
            themeColor={cardList[0].themeColor}
            themeName={cardList[0].themeName}
            title={cardList[0].title}
            date={cardList[0].date}
          />
          <Card
            themeColor={cardList[1].themeColor}
            themeName={cardList[1].themeName}
            title={cardList[1].title}
            date={cardList[1].date}
          />
          <Card
            themeColor={cardList[2].themeColor}
            themeName={cardList[2].themeName}
            title={cardList[2].title}
            date={cardList[2].date}
          />
          <Card
            themeColor={cardList[3].themeColor}
            themeName={cardList[3].themeName}
            title={cardList[3].title}
            date={cardList[3].date}
          />
          <Card
            themeColor={cardList[4].themeColor}
            themeName={cardList[4].themeName}
            title={cardList[4].title}
            date={cardList[4].date}
          />
        </Column>

        <Column status={cardList[1].status}>
          <Card
            themeColor={cardList[2].themeColor}
            themeName={cardList[2].themeName}
            title={cardList[2].title}
            date={cardList[2].date}
          />
        </Column>

        <Column status={cardList[2].status}>
          <Card
            themeColor={cardList[2].themeColor}
            themeName={cardList[2].themeName}
            title={cardList[2].title}
            date={cardList[2].date}
          />
          <Card
            themeColor={cardList[2].themeColor}
            themeName={cardList[2].themeName}
            title={cardList[2].title}
            date={cardList[2].date}
          />
          <Card
            themeColor={cardList[2].themeColor}
            themeName={cardList[2].themeName}
            title={cardList[2].title}
            date={cardList[2].date}
          />
        </Column>

        <Column status={cardList[3].status}>
          <Card
            themeColor={cardList[3].themeColor}
            themeName={cardList[3].themeName}
            title={cardList[3].title}
            date={cardList[3].date}
          />
        </Column>

        <Column status={cardList[4].status}>
          <Card
            themeColor={cardList[4].themeColor}
            themeName={cardList[4].themeName}
            title={cardList[4].title}
            date={cardList[4].date}
          />
        </Column>
      </Main>
    </Wrapper>
  );
}

export default App;
