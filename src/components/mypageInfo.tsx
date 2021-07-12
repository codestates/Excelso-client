import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import {
  MypageBody,
  MypageTitle,
  MypageInfo,
  MypageInfoBox,
  MypageInfoName,
  ChangeNicknameBtn,
  MypageInfoInput,
  ChangePwBtn,
  MypageInfoEmail,
  MypageInfoNick,
} from "./style";
import ChangeNickname from "./changeNickname";
// import { StaticRouter } from "react-router";
import axios from "axios";

interface userDataI {
  success: boolean;
  accessToken: string;
  info: {
    id: number;
    email: string;
    nickname: string;
  };
  message: string;
}
const MypageInfoCpn = () => {
  const [pwInfo, setPwInfo] = useState({
    currentPw: "",
    changePw: "",
    checkChangePw: "",
  });

  const userData: userDataI = useSelector(
    (state: RootState) => state.loginReducer
  );

  const [hidden, setHidden] = useState(true); // open

  const handleHidden = (data: boolean) => {
    console.log(data);
    setHidden(data);
  };
  const handleChangePw = (key: string) => (e: any) => {
    setPwInfo({
      ...pwInfo,
      [key]: String(e.target.value),
    });
  };

  const changeButtonClick = async () => {
    const { currentPw, changePw, checkChangePw } = pwInfo;
    const regex = /^[A-Za-z0-9]{6,20}$/;
    if (changePw !== checkChangePw) {
      return alert("변경할 비밀번호가 일치하지 않습니다.");
    } else if (!currentPw || !changePw || !checkChangePw) {
      return alert("모든 비밀번호를 기입해주세요.");
    } else if (!regex.test(changePw) && !regex.test(checkChangePw)) {
      return alert("숫자와 영문자 조합으로 6자리 이상을 사용해야 합니다.");
    }

    await axios
      .patch("http://localhost:3000/user/changepassword", {
        currentPassword: currentPw,
        changePassword: changePw,
        token: JSON.parse(sessionStorage.getItem("accessToken")!),
      })
      .then((res) => {
        console.log(res);
        setPwInfo({
          currentPw: "",
          changePw: "",
          checkChangePw: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const changeNicknameBtnClick = () => {
    setHidden(false);
  };

  return (
    <>
    <MypageBody>
      <MypageTitle>마이페이지</MypageTitle>
      <MypageInfo>
        <MypageInfoBox>
          <MypageInfoName>이메일: </MypageInfoName>
          <MypageInfoEmail>{userData.email}</MypageInfoEmail>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>닉네임: </MypageInfoName>
          <MypageInfoNick>{userData.nickname}</MypageInfoNick>
          <ChangeNicknameBtn onClick={changeNicknameBtnClick}>닉네임 변경하기</ChangeNicknameBtn>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>현재 비밀번호</MypageInfoName>
          <MypageInfoInput type="password" onChange={handleChangePw('currentPw')}></MypageInfoInput>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>변경할 비밀번호</MypageInfoName>
          <MypageInfoInput type="password" onChange={handleChangePw('changePw')}></MypageInfoInput>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>비밀번호 확인</MypageInfoName>
          <MypageInfoInput type="password" onChange={handleChangePw('checkChangePw')}></MypageInfoInput>
          <ChangePwBtn onClick={changeButtonClick}>비밀번호 변경</ChangePwBtn>
        </MypageInfoBox>
      </MypageInfo>
    </MypageBody>
    <ChangeNickname hidden={hidden} handleHidden={handleHidden} handleUserData={handleUserData}/>
    </>    
  )
}

export default MypageInfoCpn;
