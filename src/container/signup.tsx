import React from "react";
// import styled, { createGlobalStyle } from "styled-components";
import { Navbar, Container,
   GlobalStyle, Button
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
        <Navbar></Navbar>
        <SignupInfoCpn></SignupInfoCpn>
        <Button>SIGN UP</Button>
      </Container>
    </>
  );
}
  
export default SignupContainer;