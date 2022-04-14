import React from 'react';
import ProductColor from '../ProductColors/ProductColor';
import './ProductCard.css';
import bag from '../../images/icons/bag-icon.png';
import favor from '../../images/icons/favor-light.png';

const ProductCard = ({title, size, article, description, sale, price, material, mainimage, images}) => {

    function priceCalc(price, sale){
        let newPrice = 0;
        if(sale){
             newPrice = Math.ceil(price - price * sale / 100);
        } else newPrice = price;
        return newPrice;
    }

    return (
        <div className='card'>
            <div className='card-images'>
                <div>
                    <img src={mainimage} alt='Фото' className='card-img'/>
                    {images?.map((item, index)=> (
                        <img src={item} key={index} className={index<3 ? 'card-img' : 'card-img__mini'}/>
                    ))}
                </div>
            </div>
            <div className='card-items'>
                <h3 className='card-title'>{title}</h3>
                <span className='card-item'>Артикул:</span><span className='card-value'>{article}</span>
                <br/>
                <div className='d-flex mt-2 mb-2'>
                    <span className='card-item'>Цвет:</span><ProductColor/>
                </div>
                <span className='card-price'>{priceCalc(price, sale)}</span><span className='card-price__old'>{price}</span>
                <h4 className='card-desc mt-2'>О товаре:</h4>
                <p>{description}</p> 
                <div className='d-flex flex-wrap'>
                
                    <div className='w-50'>
                        <span className='card-item'>Размерный ряд</span>
                        <span className='card-value'>{size}</span>
                    </div>
                    <div className='w-50'>
                        <span className='card-item'>Состав ткани:</span>
                        <span className='card-value'>{material}</span>
                    </div>
                    <div className='w-50'>
                        <span className='card-item'>Количество в линейке</span>
                        <span className='card-value'>5</span>
                    </div>
                    <div className='w-50'>
                        <span className='card-item'>Материал</span>
                        <span className='card-value'>{material}</span>
                    </div>
                </div>     
                <div className='d-flex justify-content-between mt-3'>
                    <button className='card-btn__add'><img src={bag} alt="" className='me-2'/>Добавить в корзину</button>
                    <button className='card-btn__favor'><img src={favor} alt=""/></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;