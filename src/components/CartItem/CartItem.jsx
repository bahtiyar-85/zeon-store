import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cross from '../../images/icons/cross.png'
import { deleteItemFromCart } from '../../store/cartSlice';
import "./CartItem.css";

const CartItem = ({setTotalPrice, setTotalSale, setTotalOrder, ...props}) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const handleClick = (num) => {
        if(num===0) setCount(1);
        else setCount(num);
    }

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
        setTotalPrice(props.price*count);
        setTotalSale(saleCalc(props)*count);
        setTotalOrder(priceCalc(props)*count);
    },[])

    useEffect(()=>{
        setTotalPrice(props.price*count);
        setTotalSale(saleCalc(props)*count);
        setTotalOrder(priceCalc(props)*count);
    },[count])
    return (
        <div className='cart-item mb-2'>
            <div className='cart-item-items'>
                <div className='cart-item-img'>
                    <img className='cart-item__image' src={props.mainimage} alt=''/>
                    <img className='cart-item__delete' onClick={()=>dispatch(deleteItemFromCart(props.cartId))} src={cross} alt=''/>
                </div>
                <div className='cart-item-item'>
                    <div className='cart-item-title'>{props.title}</div>
                    <div className='cart-item-value mt-2'><span className='me-2'>Размер</span><span>{props.size}</span></div>
                    <div className='d-flex align-items-center mt-2'><span className='cart-item-value'>Цвет</span><span className='item-color ms-2' style={{background: props.selectedColor}}>{'  '}</span> </div>
                    <div className='mt-2'><span className='cart-item__new-price'>{priceCalc(props)+' p '}</span><span className='cart-item__old-price ms-2'>{props.price+' p'}</span></div>
                    <div className='cart-item-btn mt-2'><button onClick={()=> handleClick(count-1)}>-</button ><span>{count}</span><button  onClick={()=> handleClick(count+1)}>+</button></div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;