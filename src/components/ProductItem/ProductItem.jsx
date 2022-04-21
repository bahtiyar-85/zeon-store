import React, { useState } from 'react';
import './ProductItem.css'
import triangle from '../../images/Rectangle384.png'
import ProductColor from '../ProductColors/ProductColor';
import { Link } from 'react-router-dom';

const ProductItem = ({color, ...props}) => {
    const [currentColor, setCurrentColor] = useState(0);
    function priceCalc({price, sale}){
        let newPrice = 0;
        if(sale){
             newPrice = Math.ceil(price - price * sale / 100);
        } else newPrice = price;
        return newPrice;
    }
    return (
        <div className='product '>
            <Link to={`/product/${props.id}`}>
                <div className='product-image'>
                <img src={props.mainimage} alt='Фото'/>
                    {props.sale > 0 && 
                    <>
                        <img className='product-sale__triangle' src={triangle}/>
                        <span className='product-sale__value'>{props.sale}%</span>
                    </>
                    }
                </div>
            </Link>
            <div className='m-2 product-items'>
                <h5 className='product-title'>{props.title}</h5>
                <span className='product-price'>{priceCalc(props)}</span> <span className='product-price__old ms-3'>{props.sale ? props.price : null}</span>
                <br/>
                <span className='product-size mb-2'>{props.size}</span><br/>
                <ProductColor color={color} setCurrentColor={setCurrentColor}/>
            </div> 
        </div>
    );
};

export default ProductItem;