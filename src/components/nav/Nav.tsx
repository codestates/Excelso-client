import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";

import { BiMenu } from "react-icons/bi";

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
  Menubar,
  MenuBarCol,
  MenuHidden,
  MenuLoginDiv,
  MenuSignupDiv,
  MenuHideButton
} from "./navStyles";

const Nav = () => {
  const history = useHistory();

  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignUp, setClickSignUp] = useState(false);
  const [clickLogout, setClickLogout] = useState(false);

  const [menu, setMenu] = useState(false);

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

  const onClickMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <>
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
            <MenuButton>음료</MenuButton>
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
        <Menubar onClick={onClickMenu}>
          <div>
            <BiMenu size="lg"></BiMenu>
          </div>
        </Menubar>
      </NavContainer>
      <MenuHidden>
        {menu ? (
          <MenuBarCol>
            <MenuLoginDiv>
              {sessionStorage.getItem("accessToken") ? (
                <Link to="/mypage">
                  <MenuHideButton>마이페이지</MenuHideButton>
                </Link>
              ) : (
                <Link to="/login">
                  <MenuHideButton onClick={onClickLogin}>로그인</MenuHideButton>
                </Link>
              )}
            </MenuLoginDiv>
            <MenuSignupDiv>
              {sessionStorage.getItem("accessToken") ? (
                <Link to="/">
                  <MenuHideButton onClick={onClickLogout}>
                    로그아웃
                  </MenuHideButton>
                </Link>
              ) : (
                <Link to="/signup">
                  <MenuHideButton onClick={onClickSignUp}>
                    회원가입
                  </MenuHideButton>
                </Link>
              )}
            </MenuSignupDiv>
          </MenuBarCol>
        ) : (
          ""
        )}
        )
      </MenuHidden>
    </>
  );
};

export default Nav;
