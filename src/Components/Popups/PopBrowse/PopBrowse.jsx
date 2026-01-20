import React from "react";
import Calendar from "../../Calendar/Calendar";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { cardList } from "../../../data";
import { useNavigate } from "react-router-dom";
import {
  SPopBrowse,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseStatus,
  PopBrowseStatusP,
  PopBrowseThemes,
  PopBrowseTheme,
  PopBrowseWrap,
  PopBrowseForm,
  PopBrowseFormBlock,
  PopBrowseP,
  PopBrowseFormArea,
  ThemeDown,
  PopBrowseBtn,
  BtnGroup,
  BtnEdit,
  BtnDelete,
  BtnClose,
  BtnContainer,
  CategoriesTheme,
  ActiveCategory,
} from "./PopBrowse.styled";

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const card = useMemo(
    () =>
      cardList.find((w) => w.id === Number(id)) || {
        id: "",
        themeColor: "",
        themeName: "",
        title: "",
        date: "",
        status: "",
      },
    [id],
  );
  return (
    <SPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{card.title}</PopBrowseTtl>
              <CategoriesTheme>
                <p className="_orange">Web Design</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <PopBrowseStatusP>Статус</PopBrowseStatusP>
              <PopBrowseThemes>
                <PopBrowseTheme>
                  <p>Без статуса</p>
                </PopBrowseTheme>
                <PopBrowseTheme className="_gray">
                  <p className="_gray">Нужно сделать</p>
                </PopBrowseTheme>
                <PopBrowseTheme>
                  <p>В роботе</p>
                </PopBrowseTheme>
                <PopBrowseTheme>
                  <p>Тестирование</p>
                </PopBrowseTheme>
                <PopBrowseTheme>
                  <p>Готово</p>
                </PopBrowseTheme>
              </PopBrowseThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <PopBrowseFormBlock>
                  <label htmlFor="textArea01" className="subttl">
                    {card.status}
                  </label>
                  <PopBrowseFormArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></PopBrowseFormArea>
                </PopBrowseFormBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <ThemeDown>
              <PopBrowseP className="subttl">Категория</PopBrowseP>
              <ActiveCategory className="_orange">
                <p className="_orange">Web Design</p>
              </ActiveCategory>
            </ThemeDown>
            <PopBrowseBtn>
              <BtnGroup>
                <BtnEdit>
                  <a href="#">Редактировать задачу</a>
                </BtnEdit>
                <BtnDelete>
                  <a href="#">Удалить задачу</a>
                </BtnDelete>
              </BtnGroup>
              <BtnClose>
                <a href="" onClick={handleClose}>
                  Закрыть
                </a>
              </BtnClose>
            </PopBrowseBtn>
            <BtnContainer>
              <div className="btn-group">
                <BtnEdit>
                  <a href="#">Сохранить</a>
                </BtnEdit>
                <BtnEdit>
                  <a href="#">Отменить</a>
                </BtnEdit>
                <BtnDelete id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </BtnDelete>
              </div>
              <BtnClose>
                <a href="#">Закрыть</a>
              </BtnClose>
            </BtnContainer>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </SPopBrowse>
  );
};

export default PopBrowse;
