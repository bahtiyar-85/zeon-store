import React from 'react';
import ProductColor from '../ProductColors/ProductColor';
import './ProductCard.css';
import bag from '../../images/icons/bag-icon.png';
import favor from '../../images/icons/favor-light.png';

const ProductCard = () => {
    return (
        <div>
            <div>

            </div>
            <div>
                <h3 className='card-title'>Вечернее платье</h3>
                <span className='card-item'>Артикул:</span><span className='card-value'>PL4765kgj</span>
                <span className='card-item'>Цвет:</span><ProductColor/><br/>
                <span className='card-price'>34534</span><span className='card-price__old'>3459</span>
                <h4 className='card-desc'>О товаре:</h4>
                <p>lorkjh</p>      
                <div>
                    <span className='card-item'>Размерный ряд</span>
                    <span className='card-value'>43-50</span>
                </div>
                <div>
                    <span className='card-item'>Состав ткани:</span>
                    <span className='card-value'>Полиэстер</span>
                </div>
                <div>
                    <span className='card-item'>Количество в линейке</span>
                    <span className='card-value'>5</span>
                </div>
                <div>
                    <span className='card-item'>Материал</span>
                    <span className='card-value'>Полиэстер</span>
                </div>
                <button className='card-btn__add'><img src={bag} alt=""/>Добавить в корзину</button>
                <button><img src={favor} alt=""/></button>
            </div>
        </div>
    );
};

export default ProductCard;