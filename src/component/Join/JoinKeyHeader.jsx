import React, { useState } from "react";
import * as S from "./styled";
import LeftBtn from '../../assets/img/leftBtn.svg';
import down from '../../assets/img/down.svg';
import create from '../../assets/img/create.svg';

const JoinKeyHeader = () => {
  // 드롭다운의 표시 상태를 관리하는 state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 드롭다운 열고 닫는 함수
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return ( 
    <>
      <S.KeyHeader>
        <S.HeaderBtn>
          <img src={LeftBtn} alt="Left Btn" />
        </S.HeaderBtn>
        <S.HeaderRight>
          {/* 키워드 선택 버튼 */}
          <S.Select>
            <span>키워드 선택</span> <img src={down} alt="down toggle" onClick={toggleDropdown}/>
          </S.Select>
          <S.Create>
            <img src={create} alt="create btn" />
          </S.Create>
        </S.HeaderRight>
        {/* 드롭다운 메뉴 */}
        {isDropdownOpen && (
          <S.DropdownMenu>
            <S.DropdownItem>전체</S.DropdownItem>
            <S.DropdownItem>일회용품</S.DropdownItem>
            <S.DropdownItem>분리수거</S.DropdownItem>
            <S.DropdownItem>텀블러</S.DropdownItem>
            <S.DropdownItem>대기전력</S.DropdownItem>
            <S.DropdownItem>기타</S.DropdownItem>
          </S.DropdownMenu>
        )}
      </S.KeyHeader>
    </>
  );
};

export default JoinKeyHeader;
