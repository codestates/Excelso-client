import React, { useState, useEffect } from "react";
// import { addUserData, removeUserData } from './reducers/userInfo';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from './reducers';
// import "./App.css";

import Main from "./container/mainPage/Main";
import Menulist from "./container/menulist";
import CoffeesInfo from "./container/coffeeInfo";
import BrandInfo from "./container/brandInfo";
import Signup from './pages/signup';
import Mypage from './pages/mypage';
import LoginCpn from './components/login'; // ex
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
  Redirect,
} from "react-router-dom";


export const App = ({
  history,
  location,
  match,
}: RouteComponentProps): JSX.Element => {
  
  const [ userData, setUserData ] = useState(JSON.parse(sessionStorage.getItem("info")!));
  const [ accessToken ] = useState(JSON.parse(sessionStorage.getItem("accessToken")!));
  const [ isLogin, setIsLogin ] = useState(false);
  

  useEffect(() => {
    // console.log('wow useEffect!')
    console.log("userData", userData)
    if(accessToken) {
      setIsLogin(true)
    }
    else {
      setIsLogin(false);
    }
  },[accessToken])

  const handleUserData = (nick: string) => {
    setUserData({
      ...userData,
      nickname: nick,
    })
  }
// 로그인 유지 작업하는 중이었음. 
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path={`/coffee/:coffee_id`}>
        <CoffeesInfo location={location} />
      </Route>
      <Route exact path={"/coffee"}>
        <Menulist />
      </Route>
      <Route exact path={"/brandinfo"}>
        <BrandInfo></BrandInfo>
      </Route>
      <Route exact path="/signup" render={() => <Signup />} />
      <Route path="/mypage" render={() => <Mypage userData={userData} handleUserData={handleUserData}/>} />
      <Route path="/login" render={() => {
        return (
          <>
            { accessToken ? <Redirect to='/' />
            : <LoginCpn /> }
          </>
        )
      }} />
    </Switch>
  );
};

export const AppContainerWithRouter = withRouter(App);

// window.location.reload();
// window.location.replace('/')
