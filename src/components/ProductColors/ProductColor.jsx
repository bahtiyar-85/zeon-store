import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './ProductColor.css';

const ProductColor = ({color, setCurrentColor, setCartButton, id }) => {
    const [active, setActive] = useState(0);
    const {itemInCart} = useSelector((state) => state.cart);

    function handleClick(index, color){
         let bool = false;
         setActive(index); 
         setCurrentColor(color); 
         itemInCart.forEach(item => {
             if(id.concat(color)===item.cartId) bool = true;
         }) 
         bool ? setCartButton(true) : setCartButton(false); 
    }
    return (
        <div className='d-flex align-items-center '>
            {color?.map((data, index) => {
                return (
                    <div className={active!==index ? 'colors' : 'colors__active'} onClick={()=> handleClick(index, data)} key={index}>
                        <div className='colors__round' style={{backgroundColor: data}}>
                        </div>
                    </div>
                )
                })}
        </div>
    );
};

export default ProductColor;
