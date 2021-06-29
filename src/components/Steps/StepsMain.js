import React from "react";

import StepsArticle from './StepsArticle';

import t_shirt from './../../assets/Icon.png';
import bag from './../../assets/Icon(1).png';
import loupe from './../../assets/Icon(2).png';
import arrow_circle from './../../assets/Icon(3).png';

const StepsMain = () => {
  const data = [
    {
      svg: t_shirt,
      title: "Wybierz rzeczy",
      text: "ubrania, zabawki, sprzęt i inne",
    },
    {
      svg: bag,
      title: "Spakuj je",
      text: "skorzystaj z worków na śmieci",
    },
    {
      svg: loupe,
      title: "Zdecyduj komu chcesz pomóc",
      text: "wybierz zaufane miejsce",
    },
    {
      svg: arrow_circle,
      title: "Zmów kuriera",
      text: "kurier przyjedzie w dogodnym terminie",
    },
  ];

  return(
  <div className="container_steps_main">
        {
        data.map((el, i) => {return(
            <StepsArticle key={i} props={{svg: `${el.svg}`, title: `${el.title}`, text: `${el.text}`}} />
        )}
        )
        }
  </div>
  );
};

export default StepsMain;
