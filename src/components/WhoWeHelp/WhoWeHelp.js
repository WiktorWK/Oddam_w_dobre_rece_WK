import React, { useState, useEffect } from "react";

import firebase from "./../Firebase/index";

import "firebase/firestore";

import TitleSvg from "./../TitleSvg/TitleSvg";
import SquereBtn from "./../SquereBtn/SquereBtn";
import WhoWeHelpList from './WhoWeHelpList';

const WhoWeHelp = () => {
  const [data, setData] = useState({
    text: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    fundations: [],
    organizations: [],
    locals: [],
  });


  const [display, setDisplay] = useState([]);

  const showFundations = () => setDisplay(data.fundations);

  const showOraganizations = () => setDisplay(data.organizations);

  const showLocals = () => setDisplay(data.locals);

  useEffect(() => {
    firebase
      .firestore()
      .collection("fundations")
      .get()
      .then((res) => {
        const data = res.docs.map((el) => el.data());
        setData((prev) => ({ ...prev, fundations: data }));
        setDisplay(data)
      })
      .catch((err) => console.log(`err`, err));
    firebase
      .firestore()
      .collection("local_colections")
      .get()
      .then((res) => {
        const data = res.docs.map((el) => el.data());
        setData((prev) => ({ ...prev, locals: data }));
      });
    firebase
      .firestore()
      .collection("non-gov_organizations")
      .get()
      .then((res) => {
        const data = res.docs.map((el) => el.data());
        setData((prev) => ({ ...prev, organizations: data }));
      });
  }, []);


  return (
    <div className="container_whowehelp">
      <TitleSvg props={{ text1: "Komu pomagamy?", text2: "" }} />
      <div className="container_whowehelp_threebtns">
        <SquereBtn
          props={{
            text1: "Fundacjom",
            text2: "",
            onClickHandler: showFundations,
          }}
        />
        <SquereBtn
          props={{
            text1: "Organizacjom",
            text2: "pozarządowym",
            onClickHandler: showOraganizations,
          }}
        />
        <SquereBtn
          props={{
            text1: "Lokalnym",
            text2: "zbiórkom",
            onClickHandler: showLocals,
          }}
        />
      </div>
      <p className="whowehelp_text">{data.text}</p>
      <WhoWeHelpList props={{display}} />
    </div>
  );
};

export default WhoWeHelp;
