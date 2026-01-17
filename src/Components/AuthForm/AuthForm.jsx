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

const AuthForm = ({ SignUp }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/main");
  };

  return (
    <Sing>
      <SigContainer>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>{SignUp ? "Регистрация" : "Вход"}</h2>
            </ModalTtl>
            <ModalFormLogin
              id={SignUp ? "formLogUp" : "formLogIn"}
              onSubmit={handleSubmit}
            >
              <ModalInput
                type="text"
                name="login"
                id={SignUp ? "loginReg" : "formlogin"}
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id={SignUp ? "passwordFirst" : "formpassword"}
                placeholder="Пароль"
              />
              {SignUp && (
                <ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
              <ModalBtnEnt id="btnEnter">
                <a href="/"> {SignUp ? "Зарегистрироваться" : "Войти"}</a>
              </ModalBtnEnt>
              <ModalFormGroup>
                {SignUp ? (
                  <p>
                    Уже есть аккаунт?
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                      }}
                    >
                      Войдите здесь
                    </a>
                  </p>
                ) : (
                  <>
                    <p>Нужно зарегистрироваться?</p>
                    <a
                      href="/signup"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/signup");
                      }}
                    >
                      Регистрируйтесь здесь
                    </a>
                  </>
                )}
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </SigContainer>
    </Sing>
  );
};

export default AuthForm;
