import React, { useState } from "react";
import { SignupBody, SignupInfo, SignupInfoName, SignupInfoInput, SignupInfoBox, Button, SignupTitle, IsSameButton } from "./style";
import axios from 'axios';

const SignupInfoCpn = () => {
  const [ userInfo, setUserInfo ] = useState({
    email: "",
    nickname: "",
    password: "",
    checkPassword: "",
  });

  const [ checkedSame, setCheckedSame ] = useState({
    email: false,
    nickname: false,
  })

  const handleInputValue = (key: string) => (e: any) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value
    })
  }
  
  const handleButtonClick = async () => {
    const { email, nickname, password, checkPassword } = userInfo;
    const regex = /^[A-Za-z0-9]{6,20}$/;
    if(!checkedSame.email && !checkedSame.nickname) {
      return alert('중복을 확인해주세요.')
    }else if( !email || !nickname || !password || !checkPassword ) {
      return alert('모든 정보를 기입해주세요.');
    }else if(password !== checkPassword) {
      return alert('비밀번호를 확인해주세요.');
    }else if(!regex.test(password) && !regex.test(checkPassword)) {
      return alert('숫자와 영문자 조합으로 6자리 이상을 사용해야 합니다.');
    }
    await axios.post('http://localhost:3000/user/signup', {
      email,
      nickname,
      password,
    }).then(() => {
      setCheckedSame({
        email: false,
        nickname: false,
      })
    }).catch((err) => {
      return alert(err);
    })
  }

  const isSameEmailButton = async () => { // email check
    if(userInfo.email.length === 0) {
      return alert('이메일을 적어주세요.')
    }

    if(userInfo.email.indexOf("@") === -1 || userInfo.email.indexOf(".") === -1) {
      return alert('이메일 형태를 확인해주세요.')
    }
    await axios.post('http://localhost:3000/user/checkEmail', {
      email: userInfo.email,
    }).then(() => {
      setCheckedSame({
        ...checkedSame,
        email: true,
      });
      alert('이메일이 확인되었습니다.')
    }).catch((err) => {
      return alert('이메일이 중복되었습니다.');
    })
  }

  const isSameNickButton = async () => {
    if(userInfo.nickname.length === 0) {
      return alert('닉네임을 적어주세요.')
    }
    await axios.post('http://localhost:3000/user/checkNickname', {
      nickname: userInfo.nickname,
    }).then(() => {
      setCheckedSame({
        ...checkedSame,
        nickname: true,
      });
      alert('닉네임이 확인되었습니다.');
    }).catch((err) => {
      return alert('닉네임이 중복되었습니다.');
    })
  }
  // 닉네임 중복여부, 이메일 중복여부 확인
  return (
    <SignupBody>
      <SignupTitle>회원가입</SignupTitle>
      <SignupInfo>
        <SignupInfoBox>
          <SignupInfoName>EMAIL</SignupInfoName>
          <SignupInfoInput type="text" placeholder="이메일" onChange={handleInputValue('email')}></SignupInfoInput>
          <IsSameButton onClick={isSameEmailButton}>중복확인</IsSameButton>
        </SignupInfoBox>
        <SignupInfoBox>
          <SignupInfoName>NICKNAME</SignupInfoName>
          <SignupInfoInput type="text" placeholder="닉네임" onChange={handleInputValue('nickname')}></SignupInfoInput>
          <IsSameButton onClick={isSameNickButton}>중복확인</IsSameButton>
        </SignupInfoBox>
        <SignupInfoBox>
          <SignupInfoName>PASSWORD</SignupInfoName>
          <SignupInfoInput type="password" placeholder="패스워드" onChange={handleInputValue('password')}></SignupInfoInput>
        </SignupInfoBox>
        <SignupInfoBox>
          <SignupInfoName>PASSWORD</SignupInfoName>
          <SignupInfoInput type="password" placeholder="패스워드 확인" onChange={handleInputValue('checkPassword')}></SignupInfoInput>
        </SignupInfoBox>
      </SignupInfo>
      <Button onClick={handleButtonClick}>SIGN UP</Button>
    </SignupBody>  
  )
}
// 모든게 기입 안되었으면 오류
// 중복확인 후 중복되었으면 그 칸 초기화, 중복확인 안누르고 ok할 시에 오류
// 확인 패스워드 state따로 정해서 버튼 누를때 해보기.

export default SignupInfoCpn; 