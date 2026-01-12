import React from "react";
import "./Header.styled";
import {
  HeaderBtnMainNew,
  SHeader,
  Container,
  HeaderBlock,
  HeaderNav,
  HeaderLogo,
  Hover03,
  HeaderUser,
  HeaderPopUserSet,
} from "./Header.styled";
import { useNavigate } from "react-router-dom";

const Header = ({ popUser, setPopUser }) => {
  const openPop = () => {
    setPopUser(!popUser);
  };
  const navigate = useNavigate();
  const handleAddTask = (e) => {
    e.preventDefault();
    navigate("/card/add");
  };
  return (
    <SHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew>
              <a href="card/add" onClick={handleAddTask}>
                Создать новую задачу
              </a>
            </HeaderBtnMainNew>

            <HeaderUser onClick={openPop}>Ivan Ivanov</HeaderUser>
            <HeaderPopUserSet $OpenActive={popUser} id="user-set-target">
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">Ivan Ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <Hover03 type="button">
                <a href="#popExit">Выйти</a>
              </Hover03>
            </HeaderPopUserSet>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
};

export default Header;
