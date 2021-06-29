import React from "react";

import Login from './../Login/index';
import Menu from './../Menu/Menu';

const Navigation = () => {
  return (
    <div className='header_nav' >
      <Login />
      <Menu />
    </div>
  );
};

export default Navigation;
