import React from 'react';

import Column from './../Column/Column';

const ThreeColumns = () => {
    return (
        <div className='container_three_columns' >
            <Column props={{text1: '10', text2: 'oddanych worków', text3: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}} />
            <Column props={{text1: '5', text2: 'wspartych organizacji', text3: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}} />
            <Column props={{text1: '7', text2: 'zorganizowanych zbiórek', text3: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}} />
        </div>
    );
}

export default ThreeColumns;
