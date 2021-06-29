import React from 'react';

import { Route, Switch, NavLink, Link } from 'react-router-dom'


import * as ROUTES from "../../constants/routes";

const Login = () => {
    return (
        <ul>
        <li>
          <Link to={ROUTES.LOGIN}>Zaloguj</Link>
        </li>
        <li>
          <Link to={ROUTES.REGISTER}>Załóż konto</Link>
        </li>
      </ul>
    );
}

export default Login;
