import React from 'react';

const StepsArticle = ({props}) => {

    const {svg, title, text} = props;

    return (
        <div className='container_steps_article' >
            <img src={svg} alt='icon' className='article_img' />
            <h1 className='article_title'> {title} </h1>
            <p className='article_text' > {text} </p>
        </div>
    );
}

export default StepsArticle;
