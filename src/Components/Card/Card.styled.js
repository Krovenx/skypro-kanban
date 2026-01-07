import styled, { keyframes } from "styled-components";

import { StyleContainer } from "../Column/Column.styled";

export const CardContainer = styled(StyleContainer)`
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;
const rotate = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

export const CardItem = styled.div`
  padding: 5px;
  animation-name: ${rotate};
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ background }) =>
    background === "_orange"
      ? "#FFE4C2"
      : background === "_green"
      ? "#B4FDD1"
      : background === "_purple"
      ? "#E9D4FF"
      : background === "_gray"
      ? "#94A6BE"
      : "#F0F0F0"};
`;
export const CardText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;

  color: ${({ color }) =>
    color === "_orange"
      ? "#FF6D00"
      : color === "_green"
      ? "#06B16E"
      : color === "_purple"
      ? "#9A48F1"
      : color === "_gray"
      ? "#FFFFFF"
      : "#666666"};
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;

  text-decoration: ${({ decoration }) =>
    decoration ? "line-through" : "none"};
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CartDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & svg {
    width: 13px;
  }
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
