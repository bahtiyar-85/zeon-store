import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import MoreButton from '../MoreButton/MoreButton';
import ProductItem from '../ProductItem/ProductItem';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';
import './Novelties.css'

const Novelties = () => {
    const [product, setProduct] = useState([]);
    const [randomProduct, setRandomProduct] = useState([]);
   
    async function getProduct(){
        try {
            let result = await axios.get(`${PRODUCTS_API}`)
            setProduct(result.data);
        } catch (error) {
            console.error(error)
        }
        
    }

    function getNewArray(){
        const length = product.length;
        const newArray = [];
        for(let i=0; i<4; i++){
            let randomIndex = Math.floor(Math.random() * length);
            newArray.push(product[randomIndex]);
        }
        setRandomProduct(newArray);
    } 
    useEffect(()=>{
        getProduct();
    },[]);

    useEffect(()=>{
        getNewArray();
    },[product]);

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
                    {randomProduct?.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <ProductItem {...item} />
                        </SwiperSlide>
                        ))}
                
            </Swiper>
            <div className='d-flex justify-content-center'>
                <MoreButton handleClick={getNewArray}/>
            </div>
        </div>
    );
};

export default Novelties;