import React from "react";
import ReactDOM from "react-dom";
import { AppContainerWithRouter } from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { GlobalStyles } from "./globalstyle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store}>
        <AppContainerWithRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
