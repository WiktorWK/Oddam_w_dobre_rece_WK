import React from 'react';

import Header from './../Header/index';
import ThreeColumns from '../ThreeColumns/ThreeColumns';
import Steps from './../Steps/Steps';
import AboutUs from './../AboutUs/AboutUs';
import WhoWeHelp from './../WhoWeHelp/WhoWeHelp';

const Home = () => {
    return (
        <>
            <Header />
            <ThreeColumns />
            <Steps />
            <AboutUs />
            <WhoWeHelp />
        </>
    );
}

export default Home;
