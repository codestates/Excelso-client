import React from "react";
// import "./App.css";

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
} from "react-router-dom";

export const App = ({
  history,
  location,
  match,
}: RouteComponentProps): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Main} />
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
      <Route path="/login" render={() => <LoginCpn />} />
    </Switch>
  );
};

export const AppContainerWithRouter = withRouter(App);

// handleUserInfo={handleUserInfo}
