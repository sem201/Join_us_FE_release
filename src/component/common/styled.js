import { styled } from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 78px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  background-color: #1a1e1b;
`;

export const FooterButton = styled.button`
  width: 25%;
  background-color: #1a1e1b;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`;

export const FooterP = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;
