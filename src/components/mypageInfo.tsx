import { MypageBody, MypageTitle, MypageInfo, MypageInfoBox, MypageInfoName,
    ChangeNicknameBtn, MypageInfoInput, ChangePwBtn} from './style'

const MypageInfoCpn = () => {
  return (
    <MypageBody>
      <MypageTitle>마이페이지</MypageTitle>
      <MypageInfo>
        <MypageInfoBox>
          <MypageInfoName>이메일: sth</MypageInfoName>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>닉네임: sth</MypageInfoName>
          <ChangeNicknameBtn>닉네임 변경하기</ChangeNicknameBtn>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>현재 비밀번호</MypageInfoName>
          <MypageInfoInput></MypageInfoInput>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>변경할 비밀번호</MypageInfoName>
          <MypageInfoInput></MypageInfoInput>
        </MypageInfoBox>
        <MypageInfoBox>
          <MypageInfoName>비밀번호 확인</MypageInfoName>
          <MypageInfoInput></MypageInfoInput>
        </MypageInfoBox>
        <MypageInfoBox>
          <ChangePwBtn>비밀번호 변경</ChangePwBtn>
        </MypageInfoBox>
      </MypageInfo>
    </MypageBody>    
  )
}

export default MypageInfoCpn;
