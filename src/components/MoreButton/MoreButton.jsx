import React from 'react';
import './MoreButton.css'

const MoreButton = ({handleClick}) => {
    return (
        <button className='button__more' onClick={handleClick}>Еще</button>
    );
};

export default MoreButton;