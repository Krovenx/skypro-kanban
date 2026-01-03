import React from "react";
import "./PopUser.css";
import "./Header.css";
import "./Header.styled";
import {
  HeaderBtnMainNew,
  SHeader,
  Container,
  HeaderBlock,
  HeaderNav,
  HeaderLogo,
  Hover03,
} from "./Header.styled";

//////////////////////////////////////////////////////////

const Header = ({ popUser, setPopUser }) => {
  const openPop = () => {
    setPopUser(!popUser);
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
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtnMainNew>

            <div className="header__user _hover02" onClick={openPop}>
              Ivan Ivanov
            </div>
            <div
              className={`header__pop-user-set pop-user-set ${
                popUser ? "active" : ""
              }`}
              id="user-set-target"
              onClick={openPop}
              style={{
                opacity: popUser ? 1 : 0,
                visibility: popUser ? "visible" : "hidden",
              }}
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">Ivan Ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <Hover03 type="button">
                <a href="#popExit">Выйти</a>
              </Hover03>
            </div>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
};

export default Header;
