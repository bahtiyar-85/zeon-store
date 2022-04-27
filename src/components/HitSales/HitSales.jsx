import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import MoreButton from '../MoreButton/MoreButton';
import ProductItem from '../ProductItem/ProductItem';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';

const HitSales = () => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    
    async function getProduct(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?page=${page}&limit=8`)
            setProduct(result.data);
        } catch (error) {
            console.error(error)
        }
    }

    function handleClick(){
        if(product.length!==8) setPage(1);
        else setPage(prev => prev + 1);
    }
    useEffect(()=>{
        getProduct();
    },[])

    useEffect(()=>{
        getProduct();
    },[page])
    

    return (
        <div className='hit-sales flex-column align-items-center mt-5'>
            <div className='d-flex justify-content-center'>
                <h2 className='title '>Хит продаж</h2>
            </div>
            <div className=' hit-sales-swiper'>
                <Swiper
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
                    spaceBetween={10}
                >
                    {product?.slice(0,4).map((item, index)=>(
                        <SwiperSlide key={index} >
                            <ProductItem {...item} />
                        </SwiperSlide>
                ))}
                </Swiper>
                <Swiper
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
                    spaceBetween={10}
                >
                    {product?.slice(4).map((item, index)=>(
                        <SwiperSlide key={index}>
                            <ProductItem {...item} />
                        </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className='d-flex justify-content-center'>
                <MoreButton handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default HitSales;