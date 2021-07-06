import React from "react";
import Menulist from "./container/menulist";
import CoffeesInfo from "./container/coffeeInfo";
import BrandInfo from "./container/brandInfo";
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
      <Route exact path={`/coffee/:coffee_id`}>
        <CoffeesInfo location={location} />
      </Route>
      <Route exact path={"/coffee"}>
        <Menulist />
      </Route>
      <Route exact path={"/brandinfo"}>
        <BrandInfo></BrandInfo>
      </Route>
    </Switch>
  );
};

export const AppContainerWithRouter = withRouter(App);
