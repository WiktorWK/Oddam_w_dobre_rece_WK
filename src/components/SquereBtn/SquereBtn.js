import React from "react";

const SquereBtn = ({ props }) => {
  const { text1, text2, onClickHandler } = props;

  return (
    <div className="btn_squere" onClick={onClickHandler} >
      <div className="btn_squere_text_div">
        {text1} <br /> {text2}
      </div>
    </div>
  );
};

export default SquereBtn;
