import React from 'react';

import TitleSvg from './../TitleSvg/TitleSvg';

const StepsHeader = () => {
    return (
        <div className='container_steps_header' >
            <TitleSvg props={{text1: 'Wystarczą 4 proste kroki'}} />
        </div>
    );
}

export default StepsHeader;
