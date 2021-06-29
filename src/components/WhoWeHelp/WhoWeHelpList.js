import React, { useState, useEffect } from "react";

import WhoWeHelpLi from "./WhoWeHelpLi";

const WhoWeHelpList = ({ props }) => {
  const { display } = props;

  const [siteNumber, setSiteNumber] = useState([0, 2]);

  const [numberOfSites, setNumberOfSites] = useState([]);

  useEffect(() => {
    setNumberOfSites([]);
    setSiteNumber([ 0, 2])
    for (let i = 0; i < Math.floor(display.length / 3 + 0.9); i++) {
      setNumberOfSites((prev) => [...prev, i + 1]);
    }
  }, [display]);

  const list = display.map((el, i) => {
    if ((siteNumber[0] <= i) & (i <= siteNumber[1])) {
      return <WhoWeHelpLi key={i} props={{ el: el }} />;
    }
  });

  const sitesChanger = (ev) => {
    const clickedNumber = Number(ev.target.innerText);
    setSiteNumber([ 0, 2])
    setSiteNumber([ 0 + 3 * (clickedNumber - 1), 2 + 3 * (clickedNumber - 1)])

  };

  return (
    <div className="whowehelp_list">
      {list}
      <div className="whowehelp_numbers">
        {display.length > 3 &&
          numberOfSites.map((el, i) => (
            <div
              key={i}
              className="whowehelp_number"
              onClick={(ev) => sitesChanger(ev)}
            >
              <p> {el} </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhoWeHelpList;
