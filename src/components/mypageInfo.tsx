import React from "react";
import { RootState } from "../reducers";
import { successPayloadType } from "../reducers/loginReducer";
import { useSelector } from "react-redux";
import {
  MypageBody,
  MypageTitle,
  MypageInfo,
  MypageInfoBox,
  MypageInfoName,
  ChangeNicknameBtn,
  MypageInfoInput,
  ChangePwBtn,
} from "./style";
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
  const userData: userDataI = useSelector(
    (state: RootState) => state.loginReducer
  );
  console.log(userData.success);
  return "success" in userData ? (
    <MypageBody>
      <MypageTitle>마이페이지</MypageTitle>
      <MypageInfo>
        <MypageInfoBox>
          <MypageInfoName>이메일:{userData.info.email}</MypageInfoName>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>닉네임:{userData.info.nickname}</MypageInfoName>
          <ChangeNicknameBtn>닉네임 변경하기</ChangeNicknameBtn>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>현재 비밀번호</MypageInfoName>
          <MypageInfoInput type="password"></MypageInfoInput>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>변경할 비밀번호</MypageInfoName>
          <MypageInfoInput type="password"></MypageInfoInput>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>비밀번호 확인</MypageInfoName>
          <MypageInfoInput type="password"></MypageInfoInput>
        </MypageInfoBox>
        <MypageInfoBox>
          <ChangePwBtn>비밀번호 변경</ChangePwBtn>
        </MypageInfoBox>
      </MypageInfo>
    </MypageBody>
  ) : (
    <div>로그인해라</div>
  );
};

export default MypageInfoCpn;
