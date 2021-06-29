import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";

import Navigation from "./../Navigation/index";

import Home from "./../Home/index";
import Login from "./../Login/index";
import Logout from "./../Logout/index";
import Register from "./../Register/index";

import * as ROUTES from "../../constants/routes";

const App = () => {
  return (
    <Router>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.LOGOUT} component={Logout} />
        <Route path={ROUTES.REGISTER} component={Register} />
    </Router>
  );
};

export default App;
