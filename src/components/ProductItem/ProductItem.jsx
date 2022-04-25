import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import triangle from '../../images/Rectangle384.png'
import ProductColor from '../ProductColors/ProductColor';
import like from '../../images/icons/liked.png';
import nolike from '../../images/icons/nolike.png';
import { checkFavor } from '../../store/favoriteSlice';
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper";
import './ProductItem.css'


const ProductItem = ({color, ...props}) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favor = useSelector((state) => state.favorite);
    const [currentColor, setCurrentColor] = useState(0);
    const swiperRef = useRef(null)
    
    function priceCalc({price, sale}){
        let newPrice = 0;
        if(sale){
             newPrice = Math.ceil(price - price * sale / 100);
        } else newPrice = price;
        return newPrice;
    }

    function handleClick(event){
        event.stopPropagation();
        dispatch(checkFavor({...props, color}));
    }
    function check(id){
        const result = favor.prodFav.findIndex(item => item.id === id);
        if(result<0) return false;
        else return true;
    }
    
    useEffect(()=>{
        swiperRef.current.swiper.autoplay.stop();
    },[])

    return (
        <div className='product '>
         
                <div 
                    className='product-image' 
                    onClick={()=>navigate(`/product/${props.id}`)} 
                    onMouseEnter={() => swiperRef.current.swiper.autoplay.start()}
                    onMouseLeave={() => swiperRef.current.swiper.autoplay.stop()}
                >

                    <Swiper
                        ref={swiperRef}
                        scrollbar={{
                        hide: true,
                        }}
                        autoplay={{ delay: 1000,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={false}
                        modules={[Scrollbar, Autoplay]}
                        className="mySwiper"
                    >
                        {props?.images?.map((item, index)=>(
                            <SwiperSlide key={index} ><img src={item} alt='Фото'/></SwiperSlide>
                        ))}
                    </Swiper>
                
                    {props.sale > 0 && 
                    <>
                        <img className='product-sale__triangle' src={triangle}/>
                        <span className='product-sale__value'>{props.sale}%</span>
                    </>
                    }
                    <div className='product-favor' onClick={(e)=>handleClick(e)}>
                        <img  src={check(props.id) ? like: nolike} alt='' />
                    </div>
                </div>
            
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