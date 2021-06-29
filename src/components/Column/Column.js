import React from 'react';

const Column = ({props}) => {

    const {text1, text2, text3} = props;

    return (
        <div className='container_column' >
            <h1 className='column_h1' > {text1} </h1>
            <h3 className='column_h3' > {text2} </h3>
            <p className='column_p' > {text3} </p>
        </div>
    );
}

export default Column;
