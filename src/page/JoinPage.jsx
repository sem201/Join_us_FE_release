import React from "react";
import styled from "styled-components";
import Button from "../component/common/Button";
import Footer from "../component/common/Footer";
import JoinMainForm from "../component/Join/JoinMainForm";
import JoinHeader from "../component/Join/JoinHeader";
import JoinButton from "../component/Join/JoinButton";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
`;

const Text = styled.div`
  margin-top: 8px;
  color: var(--Gray4, #747474);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: -0.48px;

  span {
    color: var(--Gray5, #2E302D);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.48px;
  }
`

const JoinPage = () => {
  return (
    <>
      <MainContainer>
        <JoinHeader />
        <JoinMainForm />
        <Text>
          카드를 <span>클릭해</span> 이번달 실천카드를 확인해보세요! 
        </Text>
        <JoinButton />
        <Button bgColor="#1A1E1B">실천 카드 만들러가기</Button>
      </MainContainer>
      <Footer />
    </>
  );
};

export default JoinPage;