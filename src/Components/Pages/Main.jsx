import { Outlet } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import Main from "../Main/Main";

const MainPage = ({ loading, popUser, setPopUser }) => {
  return (
    <>
      <Wrapper>
        <Header popUser={popUser} setPopUser={setPopUser} />
        <Main loading={loading} />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
