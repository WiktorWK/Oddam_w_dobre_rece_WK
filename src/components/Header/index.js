import React from "react";

import Navigation from "./../Navigation/index";
import Jumbo from "./../Jumbo/Jumbo";
import TitleWithBtns from './../TitleWithBtns/TitleWithBtns';

const Header = () => {
  return (
    <div className="header">
      <Jumbo />
      <div>
        <Navigation />
        <TitleWithBtns />
      </div>
    </div>
  );
};

export default Header;
