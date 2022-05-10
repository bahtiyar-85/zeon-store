import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cross from '../../images/icons/cross.png'
import { deleteItemFromCart } from '../../store/cartSlice';
import "./CartItem.css";

const CartItem = ({setTotalPrice, setTotalSale, setTotalOrder, ...props}) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    function saleCalc({price, sale}){
        let productSale = 0;
        if(sale){
            productSale = Math.ceil(price * sale / 100);
        } 
        return productSale;
    }
    function priceCalc({price, sale}){
        let newPrice = 0;
        if(sale){
             newPrice = Math.ceil(price - price * sale / 100);
        } else newPrice = price;
        return newPrice;
    }
    useEffect(()=>{
        setTotalPrice(prev => prev + props.price);
        setTotalSale(prev => prev + saleCalc(props));
        setTotalOrder(prev => prev + priceCalc(props));
    },[])

    function increment(){
        setCount(prev => prev + 1);
        setTotalPrice(prev => prev + props.price);
        setTotalSale(prev => prev + saleCalc(props));
        setTotalOrder(prev => prev + priceCalc(props));
    }
    function decrement(){
        if(count>1){
            setCount(prev => prev -1);
            setTotalPrice(prev => prev - props.price);
            setTotalSale(prev => prev - saleCalc(props));
            setTotalOrder(prev => prev - priceCalc(props));
        };
    }
    function deleteFromCart(){
        setTotalPrice(prev => prev - props.price*count);
        setTotalSale(prev => prev - saleCalc(props)*count);
        setTotalOrder(prev => prev - priceCalc(props)*count);
        dispatch(deleteItemFromCart(props.cartId));
    }

    return (
        <div className='cart-item mb-2'>
            <div className='cart-item-items'>
                <div className='cart-item-img'>
                    <img className='cart-item__image' src={props.mainimage} alt=''/>
                    <img className='cart-item__delete' onClick={deleteFromCart} src={cross} alt=''/>
                </div>
                <div className='cart-item-item'>
                    <div className='cart-item-title'>{props.title}</div>
                    <div className='cart-item-value mt-2'><span className='me-2'>Размер</span><span>{props.size}</span></div>
                    <div className='d-flex align-items-center mt-2'><span className='cart-item-value'>Цвет</span><span className='item-color ms-2' style={{background: props.selectedColor}}>{'  '}</span> </div>
                    <div className='mt-2'><span className='cart-item__new-price'>{priceCalc(props)+' p '}</span><span className='cart-item__old-price ms-2'>{props.price+' p'}</span></div>
                    <div className='cart-item-btn mt-2'><button onClick={decrement}>-</button ><span>{count}</span><button  onClick={increment}>+</button></div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;