import React, { useEffect, useState } from 'react';
import { PRODUCTS_API } from '../../helpers/consts';
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import SimilarCard from '../SimilarCard/SimilarCard';
import './SimilarProducts.css';


const SimilarProducts = ({title}) => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    
    function getArray(){
        const arr = [];
        // while(arr.length<5){
            getProducts();
            console.log('array', product);
            // array.forEach(item => {
            //     console.log('item', item);
            // })
        // }
    }
    async function getProducts(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?page=${page}&limit=5`)
            setProduct(result.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getProducts();
    },[]);
    
    useEffect(()=>{
       
    },[product])

    return (
        <div className='similar-products mt-4 pb-5'>
            <div className='d-flex justify-content-start'>
                <h2 className='title'>{title}</h2>
            </div>
            <Swiper
                    breakpoints={{
                        230: {
                          width: 230,
                          slidesPerView: 1,
                        },
                        460: {
                            width: 460,
                            slidesPerView: 2,
                        },
                        690: {
                            width: 690,
                            slidesPerView: 3,
                        },
                        920: {
                            width: 920,
                            slidesPerView: 4,
                        },
                        1150: {
                            width: 1150,
                            slidesPerView: 5,
                        },
                      }}
                    spaceBetween={10}
                >
                    {product?.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <SimilarCard {...item}/>
                        </SwiperSlide>
                        ))}
                </Swiper>
        </div>
    );
};

export default SimilarProducts;