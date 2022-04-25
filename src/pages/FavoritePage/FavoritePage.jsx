import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';

import './FavoritePage.css';
import FloatingButton from '../../components/FloatingButton/FloatingButton';


const FavoritePage = () => {
    const favor = useSelector(state=> state.favorite);
    console.log('favor', favor);
    return (
        <div className='container'>
            <h2 className='title'>Избранное</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                allowTouchMove={true}
            >
                {favor.prodFav.map((item, index)=> (
                    <SwiperSlide key={index} >
                        <ProductItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <FloatingButton/>
        </div>
    );
};

export default FavoritePage;