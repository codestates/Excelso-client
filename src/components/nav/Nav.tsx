import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import {
  NavContainer,
  LogoDiv,
  BeanDiv,
  MenuDiv,
  MenuButton,
  // NavDiv,
  LoginDiv,
  SignUpDiv,
  Button,
  Logo
  // GroupDiv
} from "./navStyles";

const Nav = () => {
  const history = useHistory();

  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignUp, setClickSignUp] = useState(false);
  const [clickLogout, setClickLogout] = useState(false);

  const goHome = () => {
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
    if (clickLogout) {
      setClickLogout(false);
    } else {
      setClickLogout(true);
    }
  };

  return (
    <NavContainer>
      <LogoDiv>
        <Logo onClick={goHome}>Excelso</Logo>
      </LogoDiv>
      <BeanDiv>
        <Link to="/coffee">
          <MenuButton>원두</MenuButton>
        </Link>
      </BeanDiv>
      <MenuDiv>
        <MenuButton>메뉴</MenuButton>
      </MenuDiv>
      <LoginDiv>
        {document.cookie ? (
          <Button onClick={onClickLogin}>로그인</Button>
        ) : (
          <Link to="/mypage">
            <Button>마이페이지</Button>
          </Link>
        )}
      </LoginDiv>
      <SignUpDiv>
        {document.cookie ? (
          <Button onClick={onClickLogout}>로그아웃</Button>
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
