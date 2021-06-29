import React from "react";

const WhoWeHelpLi = ({ props }) => {
  const { el } = props;

  return (
    <li className="whowehelp_li">
      <div className='whowehelp_li_main' >
        <h1 className='whowehelp_li_main_h1' >Fundacja "{el.name}"</h1>
        <p className='whowehelp_li_main_p' >Cel i misja: {el.target}</p>
      </div>
      <div className='whowehelp_li_side' >
        <p className='whowehelp_li_side' >{el.request.join(', ')}</p>
      </div>
    </li>
  );
};

export default WhoWeHelpLi;
