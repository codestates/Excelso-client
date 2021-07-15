import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { Autoplay } from "swiper";

import { BiMenu } from "react-icons/bi";

import LoginCpn from "../login";

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

const Nav = (): JSX.Element => {
  const history = useHistory();

  const [clickSignUp, setClickSignUp] = useState(false);
  const [hidden, setHidden] = useState(true);

  const [menu, setMenu] = useState(false);

  const goHome = () => {
    console.log("goHome");
    history.push("/");
  };

  const onClickLogin = () => {
    setHidden(false);
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
    window.location.reload();
  };

  const onClickMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const handleHidden = (data: boolean) => {
    console.log(data);
    setHidden(data);
  };

  // const handleHidden = ( data: boolean ) => {
  //   console.log(data);
  //   setHidden(data);
  // }

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
            <Button onClick={onClickLogin}>로그인</Button>
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
            <BiMenu size="md"></BiMenu>
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
      <LoginCpn hidden={hidden} handleHidden={handleHidden} />
    </>
  );
};

export default Nav;
