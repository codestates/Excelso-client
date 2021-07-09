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
  // NavDiv,
  LoginDiv,
  SignUpDiv,
  Button,
  Logo,
  // GroupDiv
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
  console.log(userData.success);

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

  // useEffect(() => {
  //   console.log("start");
  //   axios
  //     .get("http://localhost:3000/auth")
  //     .then((response) => response.data)
  //     .then((data) => console.log(data));
  // }, []);
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
        {!userData.success ? (
          <Link to="/login">
            <Button onClick={onClickLogin}>로그인</Button>
          </Link>
        ) : (
          <Link to="/mypage">
            <Button>마이페이지</Button>
          </Link>
        )}
      </LoginDiv>
      <SignUpDiv>
        {!userData.success ? (
          <Link to="/signup">
            <Button onClick={onClickSignUp}>회원가입</Button>
          </Link>
        ) : (
          <Link to="/signup">
            <Button onClick={onClickLogout}>로그아웃</Button>
          </Link>
        )}
      </SignUpDiv>
    </NavContainer>
  );
};

export default Nav;
