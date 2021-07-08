import React, { useState } from 'react';
import style from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../store';
import { postUser } from '../reducers/loginReducer'

const OpenButton = style.button`
  background: blue;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
`

const ModalBody = style.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${props => (props.hidden ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  position: fixed;
`

const ModalOverlay = style.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`

const ModalContent = style.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  text-align: center;
  border-radius: 20px;
  height: 65vh;
  width: 30%;
  position: relative;
`

const ButtonBox = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const LoginButton = style.button`
  width: 80%;
`

const SocialLoginButton = style.button`
  width: 80%;
`

const ContentBox = style.div`
  width:100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`

const ContentName = style.div`
  
`

const ContentInput = style.input`
  
`

//type
// type handleProps = {
//   handleUserInfo: (userData: any) => void;
// }
// handleUserInfo }: handleProps 
const LoginCpn = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootReducerType) => state.loginReducer); 
  const [ hidden, setHidden ] = useState(true); // 초기값은 true
  const [ inputData, setInputData ] = useState({
    email: "",
    password: "",
  }) 

  const openButtonClick = () => {
    setHidden(false);
  }

  const ButtonClick = () => {
    setInputData({
        email: "",
        password: "",
    })
    console.log(userData);
    setHidden(true);
  }

  const LoginButtonClick = () => {
    const { email, password } = inputData
    dispatch(postUser(email, password));
    console.log(userData); // user data
    // handleUserInfo(userData);
    setHidden(true);
    setInputData({
        email: "",
        password: "",
    })
  }

  const handleInputValue = (key:string) => (e:any) => {
    setInputData({
      ...inputData,
      [key]: e.target.value
    })
  }

  return (
    <>
    <OpenButton onClick={openButtonClick}>open modal</OpenButton>
    <ModalBody hidden={hidden} onClick={ButtonClick}>
      <ModalOverlay></ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
          <ContentBox>
             <ContentName>EMAIL</ContentName>
             <ContentInput type="text"
              placeholder="이메일" onChange={handleInputValue('email')}></ContentInput>
          </ContentBox>
          <ContentBox>
             <ContentName>PASSWORD</ContentName>
             <ContentInput type="password"
              placeholder="패스워드" onChange={handleInputValue('password')}></ContentInput>
          </ContentBox>
          <ButtonBox>
            <LoginButton onClick={LoginButtonClick}>LOGIN</LoginButton>
            <SocialLoginButton>Social</SocialLoginButton>
          </ButtonBox>
      </ModalContent>
    </ModalBody>
    </>
  )  
}

export default LoginCpn;