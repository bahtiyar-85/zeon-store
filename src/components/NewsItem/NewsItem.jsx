import React, { useState } from 'react';
import './NewsItem.css'

const NewsItem = ({image, title, text}) => {
    const [state, setState] = useState(true);
    
    const subText = text.substring(0, 100) + '...';
    
    return (
        <div className='m-3 news-item d-flex'>
            <div className='news-item-img '>
                <img src={image} alt=''/>
            </div>
            <div className='news-item-items '>
                <h3 className='news-item-items__title'>{title}</h3>
                
                     <p className='news-item-items__text new-item__simple'>{text}</p>
                
                    <div className='new-item__with-btn'>
                        <p className='news-item-items__text'>{state ? subText: text}</p>
                        <div className='news-item-btn' onClick={()=> setState(!state)}>
                            {state ? 'Читать полностью' : 'Скрыть'}
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default NewsItem;