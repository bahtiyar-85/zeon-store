import React from 'react';
import './NewsItem.css'

const NewsItem = ({image, title, text}) => {
    return (
        <div className='m-3 news-item d-flex'>
            <div className='news-item-img me-3'>
                <img src={image} alt=''/>
            </div>
            <div className='news-item-items '>
                <h3 className='news-item-items__title'>{title}</h3>
                <p className='news-item-items__text'>{text}</p>
            </div>
        </div>
    );
};

export default NewsItem;