import { styled } from "styled-components";

export const JoinFormText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  width: 100%;
`;

export const JoinFormContainer = styled.div`
  
`;

export const JoinFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  margin: 0 auto;
  width: 272.047px;
  height: 420px;
`;

export const BottomWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;

export const MiddleWrapper = styled.div`
  position: absolute;
  z-index: 2;
`;

export const WrapperImage = styled.div`
  position: absolute;
  z-index: 3;
  border-radius: 8px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.20);
`;


export const ExampleButton = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
  width: 100%;
`;

export const ExButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  background: ${(props) => (props.isClicked ? "var(--Primary-color, #417E59)" : "var(--Gray1, #F1F1F1)")};
  border: 1px solid ${(props) => (props.isClicked ? "var(--Sub-color, #66A776)" : "var(--Gray2, #E0E0E0)")};

  color: ${(props) => (props.isClicked ? "var(--White, #FFF)" : "var(--Gray5, #2E302D)")};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const ButtonContainer = styled.div`

`;

export const TextContainer = styled.div`
  width: 313px;
  height: 419px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Gray2, #E0E0E0);
  background: var(--Gray1, #F1F1F1);
  margin-top: 77px;
  margin-bottom: 16px;
`;

export const TextHeader = styled.div`
  color: var(--Black, #1A1E1B);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 30px */
  letter-spacing: -0.8px;

  padding: ${(props) =>
    props.currentPage === 2 ? "36px 0px 16px 20px" : "36px 0px 36px 20px"};
`;

export const TextBody = styled.div`
  color: var(--Gray5, #2E302D);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.64px;

  padding: 0px 0px 0px 20px;

  span {
    font-weight: 700;
  }
`;

export const TextImg = styled.div` 
  padding-left : 250px;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

`

export const LeftBtnContainer = styled.div`
  color: #E0E0E0;
`

export const ExContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin-top: 50px;
  width: 100%;
  height: 420px;
`;

export const ExTextContainer = styled.div`
  width: 50%;
  margin-bottom: 20px;
  margin-left: 20px;
  border-radius: 34px;
  border: 1px solid var(--Gray2, #E0E0E0);
  background: var(--Gray1, #F1F1F1);

  span {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.68px;
  }
`;


export const ExImage = styled.div`
  display: flex;
  justify-content: center;
`
export const ExBottom = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-evenly;
`
export const BottomText = styled.div`
  span {
    color: var(--Primary-color, #417E59);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;
  }
`

export const CheckCircle = styled.div`

`;

export const ExLastContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  margin: auto auto;
  width: 100%;
  height: 70vh;
`;

export const ExLastText = styled.div`
  color: var(--Gray5, #2E302D);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.64px;
  span{
    color: var(--Gray5, #2E302D);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.64px;
  }
`;

export const Vector = styled.div`
  width: 15.762px;
  height: 52.754px;
  flex-shrink: 0;
  margin: 15px;
`;