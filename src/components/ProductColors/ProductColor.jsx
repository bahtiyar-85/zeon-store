import React, { useState } from 'react';
import './ProductColor.css';

const ProductColor = ({color, setCurrentColor}) => {
    const [active, setActive] = useState(0);
    function handleClick(index, color){
         setActive(index); 
         setCurrentColor(color)  
    }
    return (
        <div className='d-flex align-items-center'>
            {color?.map((data, index) => {
                return (
                    <div className={active!==index ? 'colors' : 'colors__active'} onClick={()=> handleClick(index, data)} key={index}>
                        <div className='colors__round' style={{backgroundColor: data}}>
                        </div>
                    </div>
                )
                })}
        </div>
    );
};

export default ProductColor;
