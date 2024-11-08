import React from "react";
import * as S from "./styled";
import Plus from "../../assets/img/plus.svg";

const JoinCreateMain = () => {
  return (
    <>
      <S.CreateMainContainer>
        <S.CreateFrame />
        <S.CreateBtn>
          <img src={Plus} alt="Plus" />
        </S.CreateBtn>
      </S.CreateMainContainer>
      <S.CreateBottomContainer>
        <S.CautionText>
          <span>*사진은 16:9 비율로 찍어주세요!</span>
        </S.CautionText>
        <S.CreateText
          placeholder="사진에 대한 설명을 간단히 써주세요."
          type="text"
        ></S.CreateText>
      </S.CreateBottomContainer>
    </>
  );
};

export default JoinCreateMain;