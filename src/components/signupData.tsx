import React from "react";
import { SignupBody, SignupInfo, SignupInfoName, SignupInfoInput, SignupInfoBox } from "./style";

const SignupInfoCpn = () => {
  return (
    <SignupBody>회원가입
      <SignupInfo>
        <SignupInfoBox>
          <SignupInfoName>EMAIL</SignupInfoName>
          <SignupInfoInput></SignupInfoInput>
        </SignupInfoBox>
        <SignupInfoBox>
          <SignupInfoName>NICKNAME</SignupInfoName>
          <SignupInfoInput></SignupInfoInput>
        </SignupInfoBox>
        <SignupInfoBox>
          <SignupInfoName>PASSWORD</SignupInfoName>
          <SignupInfoInput></SignupInfoInput>
        </SignupInfoBox>
        <SignupInfoBox>
          <SignupInfoName>PASSWORD</SignupInfoName>
          <SignupInfoInput></SignupInfoInput>
        </SignupInfoBox>
      </SignupInfo>
    </SignupBody>  
  )
}

export default SignupInfoCpn; 