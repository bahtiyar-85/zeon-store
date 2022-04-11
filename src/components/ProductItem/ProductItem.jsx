import React from 'react';
import './ProductItem.css'

const ProductItem = () => {
    return (
        <div className='product'>
            <div>
                <img />
                <img />
            </div>
            <h5></h5>
            <span className='product-price'></span> <span className='product-price__old'></span>
            <br/>
            <span>Размер</span>

        </div>
    );
};

export default ProductItem;