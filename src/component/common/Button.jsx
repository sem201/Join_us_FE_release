import React from "react";
import * as S from "./styled";
const Button = (props) => {
  return (
    <S.FooterButton>
      <S.buttonText>{props}</S.buttonText>
    </S.FooterButton>
  );
};

export default Button;
