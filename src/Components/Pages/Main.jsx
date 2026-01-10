import { Outlet } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import PopExit from "../Popups/PopExit/PopExit";
import PopNew from "../Popups/PopNew/PopNew";
import PopBrowse from "../Popups/PopBrowse/PopBrowse";
import Header from "../Header/Header";
import Main from "../Main/Main";

const MainPage = ({ loading, popUser, setPopUser }) => {
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNew />
        <PopBrowse />
        <Header popUser={popUser} setPopUser={setPopUser} />
        <Main loading={loading} />
      </Wrapper>
      <Outlet />
    </>
  );
};

export default MainPage;
