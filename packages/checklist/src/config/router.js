import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../screens/home";

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route to="/" exact component={Home} />
  </Router>
);

export default Routes;
