import React, { useState } from "react";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import JoinKeyHeader from "../component/Join/JoinKeyHeader";
import Footer from "../component/common/Footer";
import JoinKeyMain from "../component/Join/JoinKeyMain";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
`;


const JoinKeyPage = () => {
  return (
    <>  
      <MainContainer>
        <JoinKeyHeader />
        <S.KeyTextContainer>
          <span>2024.8</span>
        </S.KeyTextContainer>
        <JoinKeyMain />
      </MainContainer>
      <Footer />
    </>
  );
};

export default JoinKeyPage;