import React from "react";

import TitleSvg from "./../TitleSvg/TitleSvg";
import SquereBtn from "./../SquereBtn/SquereBtn";

const TitleWithBtns = () => {
  return (
    <div className="container_title_with_btns">
      <TitleSvg
        props={{
          text1: "Zacznij pomagać!",
          text2: "Oddaj niechciane rzeczy w zaufane ręce",
        }}
      />
      <div className='container_title_with_btns_div_for_btns' >
        <SquereBtn props={{ text1: "oddaj", text2: "rzeczy" , onClickHandler: null}} />
        <SquereBtn props={{ text1: "zorganizuj", text2: "zbiórkę" , onClickHandler: null}} />
      </div>
    </div>
  );
};

export default TitleWithBtns;
