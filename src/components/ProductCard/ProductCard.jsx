import React, { useEffect, useState } from 'react';
import ProductColor from '../ProductColors/ProductColor';
import './ProductCard.css';
import bag from '../../images/icons/bag-icon.png';
import favor from '../../images/icons/favor-light.png';
import { addItemToCart } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({color, ...props}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log('color', color);
    const [currentColor, setCurrentColor] = useState('#73A39D');

    function priceCalc(price, sale){
        let newPrice = 0;
        if(sale){
             newPrice = Math.ceil(price - price * sale / 100);
        } else newPrice = price;
        return newPrice;
    }

    function handleCartAdd(){
        let newObj = {
           ...props,
           selectedColor: currentColor,
           cartId: props.id.concat(currentColor),
        };
        dispatch(addItemToCart(newObj))
    }

    return (
        <div className='card'>
            <div className='card-images'>
                <div>
                    {/* <img src={props.mainimage} alt='Фото' className='card-img'/> */}
                    {props?.images?.map((item, index)=> (
                        <img src={item} key={index} className={index<4 ? 'card-img' : 'card-img__mini'}/>
                    ))}
                </div>
            </div>
            <div className='card-items'>
                <h3 className='card-title'>{props.title}</h3>
                <span className='card-item'>Артикул:</span><span className='card-value'>{props.article}</span>
                <br/>
                <div className='d-flex mt-2 mb-2'>
                    <span className='card-item'>Цвет:</span><ProductColor color={color} setCurrentColor={setCurrentColor}/>
                </div>
                <span className='card-price'>{priceCalc(props.price, props.sale)}</span><span className='card-price__old'>{props.price}</span>
                <h4 className='card-desc mt-2'>О товаре:</h4>
                <p>{props.description}</p> 
                <div className='d-flex flex-wrap'>
                
                    <div className='w-50'>
                        <span className='card-item'>Размерный ряд</span>
                        <span className='card-value'>{props.size}</span>
                    </div>
                    <div className='w-50'>
                        <span className='card-item'>Состав ткани:</span>
                        <span className='card-value'>{props.material}</span>
                    </div>
                    <div className='w-50'>
                        <span className='card-item'>Количество в линейке</span>
                        <span className='card-value'>5</span>
                    </div>
                    <div className='w-50'>
                        <span className='card-item'>Материал</span>
                        <span className='card-value'>{props.material}</span>
                    </div>
                </div>     
                <div className='d-flex justify-content-between mt-3'>
                    <button className='card-btn__add' onClick={handleCartAdd}><img src={bag} alt="" className='me-2' />Добавить в корзину</button>
                    <button className='card-btn__favor'><img src={favor} alt=""/></button>
                </div> 
            </div>
        </div>
    );
};

export default ProductCard;