import styled from "styled-components";

// Market Header
export const HeaderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 78px;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  z-index: 10;
`;
export const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const BackBtn = styled.img``;

export const PointContainer = styled.div`
  background-color: #66a776;
  border-radius: 34px;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const MainContainer = styled.div`
  box-sizing: content-box;
  background-color: red;
  width: 100%;
  height: 80vh;
  margin-top: 80px;
`;

export const ItemImgContainer = styled.div`
  width: 313px;
  height: 313px;
  border-radius: 8px;
  background-color: #fff;
`;
