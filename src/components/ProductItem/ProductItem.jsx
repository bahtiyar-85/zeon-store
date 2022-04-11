import React from 'react';
import './ProductItem.css'
import image from '../../images2/Rectangle1.png';
import triangle from '../../images2/Rectangle384.png'
import ProductColor from '../ProductColors/ProductColor';

const ProductItem = ({props}) => {
    return (
        <div className='product '>
            <div className='product-image'>
                <img src={image} alt='Одежда'/>
                <img className='product-sale__triangle' src={triangle}/>
                <span className='product-sale__value'>50%</span>
            </div>
            <div className='m-2 product-items'>
                <h5 className='product-title'>Вечернее платье</h5>
                <span className='product-price'>1235</span> <span className='product-price__old ms-3'>2345</span>
                <br/>
                <span className='product-size mb-2'>Размер 45-45</span><br/>
                <ProductColor className=''/>
            </div> 
        </div>
    );
};

export default ProductItem;