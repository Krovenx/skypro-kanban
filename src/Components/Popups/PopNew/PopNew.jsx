import React from "react";
import "./PopNew.css";
import "../CommonPop.css";
import "./PopForm.css";
import "./PopUser.css";
import { useNavigate } from "react-router-dom";
import {
  PopNewCard,
  PopNewContainer,
  PopNewBlock,
  PopNewContent,
  PopNewTtl,
  PopNewCLose,
  PopNewWrap,
  FormNew,
  FormNewBlock,
  Subttl,
  CategoriesP,
  PopNewCardCategories,
} from "./PopNew.styled";
import {
  FormNewInput,
  FormNewArea,
  FormNewCreate,
  CategoriesThemes,
  CategoriesTheme,
} from "../PopBrowse/PopBrowse.styled";
import { Calendar } from "../../Calendar/Calendar";

const PopNew = () => {
  const navigate = useNavigate();

  const handleClose = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <PopNewCard id="popNewCard">
      <PopNewContainer>
        <PopNewBlock>
          <PopNewContent>
            <PopNewTtl>Создание задачи</PopNewTtl>
            <PopNewCLose href="#" onClick={handleClose}>
              &#10006;
            </PopNewCLose>
            <PopNewWrap>
              <FormNew className="form-new" id="formNewCard" action="#">
                <FormNewBlock>
                  <Subttl htmlFor="formTitle">Название задачи</Subttl>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl htmlFor="textArea">Описание задачи</Subttl>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></FormNewArea>
                </FormNewBlock>
              </FormNew>
              <Calendar />
            </PopNewWrap>
            <PopNewCardCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme $background="_orange" $color="_orange">
                  <p>Web Design</p>
                </CategoriesTheme>
                <CategoriesTheme $background="_green" $color="_green">
                  <p>Research</p>
                </CategoriesTheme>
                <CategoriesTheme $background="_purple" $color="_purple">
                  <p>Copywriting</p>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate id="btnCreate">Создать задачу</FormNewCreate>
          </PopNewContent>
        </PopNewBlock>
      </PopNewContainer>
    </PopNewCard>
  );
};

export default PopNew;
