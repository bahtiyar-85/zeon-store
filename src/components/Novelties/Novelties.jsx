import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import MoreButton from '../MoreButton/MoreButton';
import ProductItem from '../ProductItem/ProductItem';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';
import './Novelties.css'

const Novelties = () => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(3);
   
    async function getProduct(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?page=${page}&limit=4`)
            setProduct(result.data);
        } catch (error) {
            console.error(error)
        }
        
    }
    function handleClick(){
        if(product.length!==4) setPage(1);
        else setPage(prev => prev + 1);
    }

    useEffect(()=>{
        getProduct();
    },[]);

    useEffect(()=>{
        getProduct();
    },[page]);

    return (
        <div className='novelties mt-5'>
            <div className='d-flex justify-content-center'>
                <h2 className='title '>Новинки</h2>
            </div>
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
                    {product?.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <ProductItem {...item} />
                        </SwiperSlide>
                        ))}
                
            </Swiper>
            <div className='d-flex justify-content-center'>
                <MoreButton handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default Novelties;