import React, { useState } from 'react';
import './NewsItem.css'

const NewsItem = ({image, title, text}) => {
    const [state, setState] = useState(true);
    const viewWidth = window.innerWidth;
    const subText = text.substring(0, 100) + '...';
    
    return (
        <div className='m-3 news-item d-flex'>
            <div className='news-item-img me-3'>
                <img src={image} alt=''/>
            </div>
            <div className='news-item-items '>
                <h3 className='news-item-items__title'>{title}</h3>
                {viewWidth>900 ? (
                     <p className='news-item-items__text'>{text}</p>
                ) : (
                    <>
                        <p className='news-item-items__text'>{state ? subText: text}</p>
                        <div className='news-item-btn' onClick={()=> setState(!state)}>
                            {state ? 'Читать полностью' : 'Скрыть'}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewsItem;