import React from 'react';

import StepsHeader from './StepsHeader';
import StepsMain from './StepsMain';
import StepsFooter from './StepsFooter';

const Steps = () => {
    return (
        <div className='container_steps' >
            <StepsHeader />
            <StepsMain />
            <StepsFooter />
        </div>
    );
}

export default Steps;
