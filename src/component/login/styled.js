import { styled } from "styled-components";

export const LoginFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const LoginInput = styled.input`
  box-sizing: border-box;
  width: 353px;
  height: 43px;
  border-radius: 69px;
  border: 1px solid #e0e0e0;
  padding: 1em;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const EyeContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const EyeImg = styled.img``;

export const FindBtnContainer = styled.div`
  margin-top: 8px;
`;

export const FindBtn = styled.button`
  display: inline-flex;
  float: right;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  border: 1px solid #e0e0e0;
  background: var(--Gray1, #f1f1f1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin-top: 50px;
`;
