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

export const HeaderText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

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

export const EmptyDiv = styled.div`
  background-color: #d9d9d9;
  margin-top: 30px;

  width: 100%;
  height: 100px;
`;

// MarketMain

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  background-color: red;
  width: 100%;
  height: 300px;
  margin-top: 200px;
  overflow-y: auto;
`;

export const CardContainer = styled.div`
  background-color: blue;
  width: 144px;
  height: 150px;
`;
