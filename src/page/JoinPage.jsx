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

const JoinPage = () => {
  return (
    <>
      <MainContainer>
        <JoinHeader />
        <JoinMainForm />
        <JoinButton />
        <Button bgColor="#1A1E1B">실천 카드 만들러가기</Button>
      </MainContainer>
      <Footer />
    </>
  );
};

export default JoinPage;