import React, { useState } from "react";
import style from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { postUser } from "../reducers/loginReducer";

import { GoogleLogin } from "react-google-login";
// const OpenButton = style.button`
//   background: blue;
//   color: white;
//   padding: 5px 20px;
//   border-radius: 5px;
// `;

const ModalBody = style.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${props => (props.hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:100;
`;

const ModalOverlay = style.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ModalContent = style.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: #262223;
  text-align: center;
  border-radius: 20px;
  height: 50vh;
  width: 30%;
  position: relative;
  color: #DDC6B6;
`;

const LoginTitle = style.div`
  font-size: 1.8rem;
  margin-top: 18px;
`;

const ButtonBox = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 48px;
`;

const LoginButton = style.button`
  width: 80%;
  height: 4vh;
  margin-bottom: 16px;
  border-radius: 30px;
`;

const SocialLoginButton = style.button`
  width: 80%;
  height: 4vh;
  border-radius: 30px;
`;

const ContentBox = style.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`;

const ContentName = style.div`
  padding: 4px 16px;
  width: 30%;
`;

const ContentInput = style.input`
  width: 50%;
`;

//type

const LoginCpn = ({ handleHidden, hidden }: any) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.loginReducer);
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });
  // const openButtonClick = () => {
  //   handleHidden(false);
  // };

  const ButtonClick = () => {
    setInputData({
      email: "",
      password: ""
    });
    console.log(userData);
    handleHidden(true);
  };

  const LoginButtonClick = async () => {
    const { email, password } = inputData;
    if (!email || !password) {
      return alert("로그인 정보를 입력해주세요.");
    }
    await dispatch(postUser(email, password));
    handleHidden(true);
    setInputData({
      email: "",
      password: ""
    });
  };

  const handleInputValue = (key: string) => (e: any) => {
    setInputData({
      ...inputData,
      [key]: e.target.value
    });
  };

  const handlelogin = async (googleData: any) => {
    console.log(googleData);
    const res = await fetch("http://localhost:3000/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    // store returned user somehow
    console.log(data);
    if (data.email) {
      await dispatch(postUser(data.email, ""));
    }
  };

  return (
    <>
      {/* <OpenButton onClick={openButtonClick}>open modal</OpenButton> */}
      {/* <Nav></Nav> */}
      <ModalBody hidden={hidden} onClick={ButtonClick}>
        <ModalOverlay></ModalOverlay>
        <ModalContent onClick={e => e.stopPropagation()}>
          <LoginTitle>Excelso LOGIN</LoginTitle>
          <ContentBox>
            <ContentName>EMAIL</ContentName>
            <ContentInput
              type="text"
              placeholder="이메일"
              onChange={handleInputValue("email")}
            ></ContentInput>
          </ContentBox>
          <ContentBox>
            <ContentName>PASSWORD</ContentName>
            <ContentInput
              type="password"
              placeholder="패스워드"
              onChange={handleInputValue("password")}
            ></ContentInput>
          </ContentBox>
          <ButtonBox>
            <LoginButton onClick={LoginButtonClick}>LOGIN</LoginButton>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
              buttonText="Log in with Google"
              onSuccess={handlelogin}
              onFailure={handlelogin}
            />
          </ButtonBox>
        </ModalContent>
      </ModalBody>
    </>
  );
};

export default LoginCpn;
