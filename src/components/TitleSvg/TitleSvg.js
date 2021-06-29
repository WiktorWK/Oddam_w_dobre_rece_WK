import React from 'react';

const TitleSvg = ({props}) => {

    const {text1, text2} = props;

    return (
        <div className='title_svg' >
            <h1 className='title_svg_h1' > {text1} <br/> {text2} </h1>
            <span className='title_svg_span' />
        </div>
    );
}

export default TitleSvg;
