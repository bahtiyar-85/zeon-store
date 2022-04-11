import React from 'react';
import './Advantage.css';


const Advantage = ({icon, title, text}) => {
    return (
        <div className='advantage d-flex flex-column align-items-center'>
            <img className='advantage-img mt-3' src={icon}/>
            <h3 className='advantage-title mt-4'>{title}</h3>
            <p className='advantage-text '>{text}</p>
        </div>
    );
};

export default Advantage;