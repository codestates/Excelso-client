import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Main from "./container/mainPage/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
