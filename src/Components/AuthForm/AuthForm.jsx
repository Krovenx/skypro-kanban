import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Sing,
  SigContainer,
  Modal,
  ModalBlock,
  ModalTtl,
  ModalFormLogin,
  ModalInput,
  ModalBtnEnt,
  ModalFormGroup,
} from "../AuthForm/AuthForm.styled";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/main");
  };

  const handleReg = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  return (
    <Sing>
      <SigContainer>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </ModalTtl>
            <ModalFormLogin
              id={isSignUp ? "formLogUp" : "formLogIn"}
              onSubmit={handleSubmit}
            >
              {isSignUp && (
                <ModalInput
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                />
              )}
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <ModalBtnEnt
                id="btnEnter"
                onClick={handleSubmit}
                type="submit"
              >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </ModalBtnEnt>
              {!isSignUp && (
                <ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <a href="/sign-up" onClick={handleReg}>
                    Регистрируйтесь здесь
                  </a>
                </ModalFormGroup>
              )}
              {isSignUp && (
                <ModalFormGroup>
                  <p>
                    Уже есть аккаунт?
                    <a href="/sign-in">Войдите здесь</a>
                  </p>
                </ModalFormGroup>
              )}
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </SigContainer>
    </Sing>
  );
};

export default AuthForm;
