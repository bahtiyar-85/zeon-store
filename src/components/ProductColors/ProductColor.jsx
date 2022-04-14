import React from 'react';
import './ProductColor.css';

const ProductColor = () => {
    let colorList = ['#73A39D', '#84CC4C', '#B5A8A1', '#AB844A','#6977F0','#FFFFF', '#141414',' #FF0000'];
    return (
        <div className='d-flex align-items-center'>
            {colorList.map((data, index) => {
                return (
                    <div className='colors' key={index} style={{backgroundColor: data
                    }}>
                    </div>
                )
                })}
        </div>
    );
};

export default ProductColor;
