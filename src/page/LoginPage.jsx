import React from "react";
import Logo from "../assets/img/MainLogo.svg";
import styled from "styled-components";
import LoginForm from "../component/login/LoginForm";
const MainLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 35% 0 56px 0;
`;
const Logoimg = styled.img``;
const LoginPage = () => {
  return (
    <>
      <MainLogoContainer>
        <Logoimg src={Logo}></Logoimg>
      </MainLogoContainer>
      <LoginForm />
    </>
  );
};

export default LoginPage;
