import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { NavContainer, NavDiv, Button, Logo } from "./navStyles";

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
      <NavDiv>
        <Logo onClick={goHome}>Excelso</Logo>
      </NavDiv>
      <NavDiv>
        <Button as="a" href="#">
          원두
        </Button>
        <Button as="a" href="#">
          메뉴
        </Button>
      </NavDiv>
      <NavDiv>
        {document.cookie ? (
          <Button as="a" href="#">
            마이페이지
          </Button>
        ) : (
          <Button as="a" href="#" onClick={onClickLogin}>
            로그인
          </Button>
        )}
        {document.cookie ? (
          <Button as="a" href="#" onClick={onClickLogout}>
            로그아웃
          </Button>
        ) : (
          <Button as="a" href="#" onClick={onClickSignUp}>
            회원가입
          </Button>
        )}
      </NavDiv>
    </NavContainer>
  );
};

export default Nav;
