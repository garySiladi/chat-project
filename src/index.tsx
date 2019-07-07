import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Router from "./Router";
import { configureStore } from "./store";
import "./style/index.css";
import "./style/fonts.css";
import "./style/reset.css";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
const rootElement = document.getElementById("root");
render(<App />, rootElement);
