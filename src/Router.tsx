import { Router } from "@reach/router";
import React from "react";
import { Home } from "./components/Home";
// tslint:disable-next-line:no-default-export
export default () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
};
