import React from "react";
import * as S from "./styled";
import BottomImage from "../../assets/img/BottomWrapper.svg";
import MiddleImage from "../../assets/img/MiddleWrapper.svg";
import ExImage from "../../assets/img/ExampleImage.svg";

const JoinMainForm = () => {
  return (
    <>
      <S.JoinFormContainer>
        <S.JoinFormWrapper>
          <S.BottomWrapper>
            <img src={BottomImage} alt="Bottom Wrapper"/>
          </S.BottomWrapper>
          <S.MiddleWrapper>
            <img src={MiddleImage} alt="Middle Wrapper"/>
          </S.MiddleWrapper>
          <S.WrapperImage>
            <img src={ExImage} alt="Example Image"/>
          </S.WrapperImage>
        </S.JoinFormWrapper>
      </S.JoinFormContainer>
    </>
  );
};

export default JoinMainForm;