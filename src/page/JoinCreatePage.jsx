import React from "react";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import JoinCreateHeader from "../component/Join/JoinCreateHeader";
import JoinCreateMain from "../component/Join/JoinCreateMain"
import Footer from "../component/common/Footer";
import Button from "../component/common/Button";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;


const JoinCreatePage = () => {
  return (
    <>  
      <MainContainer>
        <JoinCreateHeader />
        <JoinCreateMain />        
        <S.SBtn>
          <Button bgColor="#747474">프레임 고르기</Button>
        </S.SBtn>
      </MainContainer>
      <Footer />
    </>
  );
};

export default JoinCreatePage;