import React from 'react';
import { useSelector } from 'react-redux';
import './CartOrder.css';

const CartOrder = ({totalSale, totalPrice, totalOrder, handleShow}) => {
    const cart = useSelector((state) => state.cart);

    function lines(array){
        const arr = new Set();
        array.map((item)=> arr.add(item.id));
        return arr.size;
    }
    return (
        <div className='cart-order'>
            <div><h5>Сумма заказа</h5></div>
            <div className='cart-order-items'>
                <span className='cart-order__title'>Количество линеек:</span><span className='cart-order__value'>{lines(cart.itemInCart)+'  шт'}</span>
            </div>
            <div className='cart-order-items'>
                <span className='cart-order__title'>Количество товаров:</span><span>{cart.itemInCart.length}шт</span>
            </div>
            <div className='cart-order-items'>
                <span className='cart-order__title'>Стоимость:</span><span>{totalPrice.toLocaleString('ru-RU')+'  рублей'}</span>
            </div>
            <div className='cart-order-items'>
                <span className='cart-order__title'>Скидка:</span><span>{totalSale.toLocaleString('ru-RU')+'  рублей'}</span>
            </div>
            <div className='cart-order-items cart-order__border'>
                <span className='cart-order__title'>Итого к оплате:</span><span>{totalOrder.toLocaleString('ru-RU')+'  рублей'}</span>
            </div>
            <div>
               <button onClick={handleShow} >Оформить заказ</button>
            </div>
        </div>
    );
};

export default CartOrder;