import React from "react";
import * as S from "./styled";
const Button = (props) => {
  return (
    <S.commonButton bgColor={props.bgColor}>
      <S.buttonText>{props.children}</S.buttonText>
    </S.commonButton>
  );
};

export default Button;