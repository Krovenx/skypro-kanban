import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Column from "./Components/Column/Column";
import Card from "./Components/Card/Card";
import PopExit from "./Components/Popups/PopExit/PopExit";
import PopNew from "./Components/Popups/PopNew/PopNew";
import PopBrowse from "./Components/Popups/PopBrowse/PopBrowse";
import Wrapper from "./Components/Wrapper/Wrapper";
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  const [popUser, setPopUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopExit />
        <PopNew />
        <PopBrowse />
        <Header popUser={popUser} setPopUser={setPopUser} />
        <Main loading={loading} />
      </Wrapper>
    </>
  );
}

export default App;
