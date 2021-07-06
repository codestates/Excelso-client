import React from "react";

// import "./App.css";

import Main from "./container/mainPage/Main";
import Menulist from "./container/menulist";
import CoffeesInfo from "./container/coffeeInfo";
import BrandInfo from "./container/brandInfo";
import Signup from './pages/signup';
import Mypage from './pages/mypage';
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
        <CoffeesInfo location={location} />
      </Route>
      <Route exact path={"/coffee"}>
        <Menulist />
      </Route>
      <Route exact path={"/brandinfo"}>
        <BrandInfo></BrandInfo>
      </Route>
      <Route exact path="/signup" render={() => <Signup />} />
      <Route path="/mypage" render={() => <Mypage />} />
    </Switch>
  );
};

export const AppContainerWithRouter = withRouter(App);
