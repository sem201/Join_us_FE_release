import React, { useState } from "react";
import * as S from "./styled";

const JoinButton = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 현재 월 가져오기 (0: 1월, 1: 2월, ..., 11: 12월)
  const currentMonth = new Date().getMonth();
  
  // 현재 월부터 시작하는 월 배열 생성
  const months = [
    ...Array.from({ length: 12 - currentMonth }, (_, i) => `${currentMonth + i + 1}월`),
    ...Array.from({ length: currentMonth }, (_, i) => `${i + 1}월`)
  ];

  /* 첫 번째 배열: 12 - currentMonth만큼의 길이를 가지며, 
  현재 월부터 12월까지의 월을 계산하여 문자열로 생성 */

  // 버튼 클릭 시 클릭된 버튼의 인덱스를 activeIndex로 설정
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <S.ScrollContainer>
      <S.ExButton
        isClicked={activeIndex === 0}
        onClick={() => handleClick(0)}
      >
        예시
      </S.ExButton>
      {months.map((month, index) => (
        <S.ExButton
          key={index + 1}
          isClicked={activeIndex === index + 1}
          onClick={() => handleClick(index + 1)}
        >
          {month}
        </S.ExButton>
      ))}
    </S.ScrollContainer>
  );
};

export default JoinButton;
