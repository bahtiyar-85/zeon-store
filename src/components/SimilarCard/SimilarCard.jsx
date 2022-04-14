import React from 'react';
import triangle from '../../images/Rectangle384.png'
import ProductColor from '../ProductColors/ProductColor';
import { Link } from 'react-router-dom';
import './SimilarCard.css';

const SimilarCard = (props) => {

    function priceCalc({price, sale}){
        let newPrice = 0;
        if(sale){
             newPrice = Math.ceil(price - price * sale / 100);
        } else newPrice = price;
        return newPrice;
    }
    
    return (
        <div className='similar'>
            <div className='similar-image'>
                <Link to={`/product/${props.id}`}><img src={props.mainimage} className='similar-img' alt='Фото'/></Link>
                {props.sale > 0 && 
                <>
                    <img className='product-sale__triangle' src={triangle}/>
                    <span className='product-sale__value'>{props.sale}%</span>
                </>
                }
            </div>
            <div className='m-2 similar-items'>
                <span className='product-price'>{priceCalc(props)}</span> <span className='product-price__old ms-3'>{props.sale ? props.price : null}</span>
                <h5 className='product-title mt-1'>{props.title}</h5>
               
                <span className='product-size'>Размер {props.size}</span><br/>
                <ProductColor />
            </div> 
        </div>
    );
};

export default SimilarCard;