import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { getUserReviewAction } from "../reducers/reviewReducer";
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
  ModalLink,
  ReviewButton,
  BookmarkButton
} from "./style";
import MypageReview from "./mypageReview";
import ChangeNickname from "./changeNickname";
// import { StaticRouter } from "react-router";
import axios from "axios";
import { getJSDocAugmentsTag, isConstructorDeclaration } from "typescript";

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
  const dispatch = useDispatch();
  const [pwInfo, setPwInfo] = useState({
    currentPw: "",
    changePw: "",
    checkChangePw: ""
  });

  const userData: userDataI = useSelector(
    (state: RootState) => state.loginReducer
  );

  const [hidden, setHidden] = useState(true); // open
  const [reviewHidden, setReviewHidden] = useState(true);

  const handleHidden = (data: boolean) => {
    console.log(data);
    setHidden(data);
  };

  const reviewHandleHidden = (data: boolean) => {
    console.log(data);
    setReviewHidden(data);
  };

  const handleChangePw = (key: string) => (e: any) => {
    setPwInfo({
      ...pwInfo,
      [key]: String(e.target.value)
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
    } else {
      await axios

        .patch("http://localhost:3000/user/changepassword", {
          currentPassword: currentPw,
          changePassword: changePw,
          token: JSON.parse(sessionStorage.getItem("accessToken")!)
        })
        .then(res => {
          console.log(res);
          setPwInfo({
            currentPw: "",
            changePw: "",
            checkChangePw: ""
          });
        })
        .catch(err => console.log(err));
    }

<!--       .patch("http://localhost:3000/user/changepassword", {
        currentPassword: currentPw,
        changePassword: changePw,
        token: JSON.parse(sessionStorage.getItem("accessToken")!)
      })
      .then(res => {
        alert("비밀번호가 변경되었습니다.");
        setPwInfo({
          currentPw: "",
          changePw: "",
          checkChangePw: ""
        });
      })
      .catch(err => console.log(err));
    }  -->

  };

  const changeHiddenBtnClick = () => {
    setHidden(false);
  };

  const reviewModalClick = () => {
    setReviewHidden(false);
    dispatch(getUserReviewAction(userData.info.id));
  };

  const closeReviewModal = () => {
    setReviewHidden(false);
  };

  return (
    <>
      <MypageBody>
        <MypageTitle>마이페이지</MypageTitle>
        <MypageInfo>
          <MypageInfoBox>
            <MypageInfoName>이메일: </MypageInfoName>
            <MypageInfoEmail>
              {userData.info && userData.info.nickname}
            </MypageInfoEmail>
          </MypageInfoBox>
          <MypageInfoBox>
            <MypageInfoName>닉네임: </MypageInfoName>
            <MypageInfoNick>
              {userData.info && userData.info.nickname}
            </MypageInfoNick>
            <ChangeNicknameBtn onClick={changeHiddenBtnClick}>
              닉네임 변경하기
            </ChangeNicknameBtn>
          </MypageInfoBox>
          <MypageInfoBox>
            <MypageInfoName>현재 비밀번호</MypageInfoName>
            <MypageInfoInput
              type="password"
              onChange={handleChangePw("currentPw")}
            ></MypageInfoInput>
          </MypageInfoBox>
          <MypageInfoBox>
            <MypageInfoName>변경할 비밀번호</MypageInfoName>
            <MypageInfoInput
              type="password"
              onChange={handleChangePw("changePw")}
            ></MypageInfoInput>
          </MypageInfoBox>
          <MypageInfoBox>
            <MypageInfoName>비밀번호 확인</MypageInfoName>
            <MypageInfoInput
              type="password"
              onChange={handleChangePw("checkChangePw")}
            ></MypageInfoInput>
            <ChangePwBtn onClick={changeButtonClick}>비밀번호 변경</ChangePwBtn>
          </MypageInfoBox>
          <ModalLink>
            <BookmarkButton>즐겨찾기</BookmarkButton>
            <ReviewButton onClick={reviewModalClick}>리뷰</ReviewButton>
          </ModalLink>
        </MypageInfo>
      </MypageBody>
      <MypageReview
        reviewModalClick={reviewModalClick}
        reviewHidden={reviewHidden}
        reviewHandleHidden={reviewHandleHidden}
      />
      <ChangeNickname hidden={hidden} handleHidden={handleHidden} />
    </>
  );
};

export default MypageInfoCpn;
