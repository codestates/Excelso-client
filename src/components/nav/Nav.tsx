import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  NavContainer,
  LogoDiv,
  BeanDiv,
  MenuDiv,
  MenuButton,
  LoginDiv,
  SignUpDiv,
  Button,
  Logo,
  MypageButton,
} from "./navStyles";
import { setLogin } from "../../reducers/loginReducer";

interface userDataI {
  success: boolean;
  accessToken?: string;
  info?: {
    id: number;
    email: string;
    nickname: string;
  };
}

const Nav = (): JSX.Element => {
  const dispatch = useDispatch();
  const userData: userDataI = useSelector(
    (state: RootState) => state.loginReducer
  );
  console.log(userData);
  const history = useHistory();

  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignUp, setClickSignUp] = useState(false);

  const goHome = () => {
    console.log("goHome");
    history.push("/");
  };

  const onClickLogin = () => {
    if (clickLogin) {
      setClickLogin(false);
    } else {
      setClickLogin(true);
    }
  };

  const onClickSignUp = () => {
    if (clickSignUp) {
      setClickSignUp(false);
    } else {
      setClickSignUp(true);
    }
  };

  const onClickLogout = () => {
    sessionStorage.clear();
  };

  return (
    <NavContainer>
      <LogoDiv>
        <Logo onClick={goHome}>Excelso</Logo>
      </LogoDiv>
      <BeanDiv>
        <Link to="/brandinfo">
          <MenuButton>원두</MenuButton>
        </Link>
      </BeanDiv>
      <MenuDiv>
        <Link to="/coffee">
          <MenuButton>메뉴</MenuButton>
        </Link>
      </MenuDiv>
      <LoginDiv>
        {sessionStorage.getItem("accessToken") ? (
          <Link to="/mypage">
            <MypageButton>마이페이지</MypageButton>
          </Link>
        ) : (
          <Link to="/login">
            <Button onClick={onClickLogin}>로그인</Button>
          </Link>
        )}
      </LoginDiv>
      <SignUpDiv>
        {sessionStorage.getItem("accessToken") ? (
          <Link to="/">
            <Button onClick={onClickLogout}>로그아웃</Button>
          </Link>
        ) : (
          <Link to="/signup">
            <Button onClick={onClickSignUp}>회원가입</Button>
          </Link>
        )}
      </SignUpDiv>
    </NavContainer>
  );
};

export default Nav;
