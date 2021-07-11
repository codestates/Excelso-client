import React, { useState, useEffect } from "react";
// import { addUserData, removeUserData } from './reducers/userInfo';
import { useDispatch } from "react-redux";
// import { RootState } from "./reducers";
import { setLogin } from "./reducers/loginReducer";

import Main from "./container/mainPage/Main";
import MenulistPage from "./pages/menulistpage";
import Coffeeinfopage from "./pages/coffeeinfopage";
import BrandInfo from "./container/brandInfo";
import Signup from "./pages/signup";
import Mypage from "./pages/mypage";
import LoginCpn from "./components/login"; // ex
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
  // Redirect,
} from "react-router-dom";

export const App = ({
  history,
  location,
  match,
}: RouteComponentProps): JSX.Element => {
  const dispatch = useDispatch();

  // const [userData, setUserData] = useState(
  //   JSON.parse(sessionStorage.getItem("info")!)
  // );
  const [accessToken] = useState(
    JSON.parse(sessionStorage.getItem("accessToken")!)
  );
  // const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   // console.log('wow useEffect!')
  //   console.log("userData", userData);
  //   if (accessToken) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, [accessToken]);

  useEffect(() => {
    // console.log("accessToken:", `"${accessToken}"`);
    // console.log("accessToken:", typeof accessToken);
    dispatch(setLogin(accessToken));
  }, [dispatch, accessToken]);

  // const handleUserData = (nick: string) => {
  //   setUserData({
  //     ...userData,
  //     nickname: nick,
  //   });
  // };
  // 로그인 유지 작업하는 중이었음.
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path={`/coffee/:coffee_id`}>
        <Coffeeinfopage location={location} />
      </Route>
      <Route exact path={"/coffee"}>
        <MenulistPage />
      </Route>
      <Route exact path={"/brandinfo"}>
        <BrandInfo></BrandInfo>
      </Route>
      <Route exact path="/signup" render={() => <Signup />} />
      <Route path="/mypage" render={() => <Mypage />} />
      <Route
        path="/login"
        render={() => {
          return <LoginCpn />;
        }}
      />
    </Switch>
  );
};

export const AppContainerWithRouter = withRouter(App);

// window.location.reload();
// window.location.replace('/')
