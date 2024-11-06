import React, { useState } from "react";
import * as S from "./styled";

const JoinButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <S.ExampleButton>
        <S.ExButton isClicked={isClicked} onClick={handleClick}>예시</S.ExButton>
      </S.ExampleButton>
    </>
  );
};

export default JoinButton;