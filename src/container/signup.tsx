import React from "react";
// import styled, { createGlobalStyle } from "styled-components";
import { Container,
   GlobalStyle,
   } from './style';
import SignupInfoCpn from '../components/signupData'

// interface SignupInfo = {
//   email: string;
//   nickname: string;
//   password: string;
// }

const SignupContainer = () => {
  
  return (
    <>
    <GlobalStyle />
      <Container>
        <SignupInfoCpn></SignupInfoCpn>
      </Container>
    </>
  );
}
  
export default SignupContainer;