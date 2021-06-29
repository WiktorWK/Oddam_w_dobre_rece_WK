import React from 'react';

import TitleSvg from './../TitleSvg/TitleSvg';
import Signature from './../../assets/Signature.svg';

const AboutUsInfoText = () => {
    return (
        <div className='container_about_us_info_text' >
            <TitleSvg props={{text1: 'O nas', text2:''}} />
            <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
            </p>
            <img src={Signature} alt='autograph' />
        </div>
    );
}

export default AboutUsInfoText;
