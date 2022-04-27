import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';

import './FavoritePage.css';


const FavoritePage = () => {
    const favor = useSelector(state=> state.favorite);
    console.log('favor', favor);
    return (
        <div className='container'>
            <h2 className='title'>Избранное</h2>
            {!favor.prodFav.length && <SimilarProducts title={'Возможно Вас заинтересует'}/>}
            <Swiper
                spaceBetween={10}
                allowTouchMove={true}
                breakpoints={{
                    290: {
                      width: 290,
                      slidesPerView: 1,
                    },
                    574: {
                        width: 574,
                        slidesPerView: 2,
                    },
                    862: {
                        width: 862,
                        slidesPerView: 3,
                    },
                    1150: {
                        width: 1150,
                        slidesPerView: 4,
                    },
                  }}
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