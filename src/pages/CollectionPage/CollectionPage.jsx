import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { PRODUCTS_API, COLLECTIONS_API } from '../../helpers/consts';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import './CollectionPage.css';

const CollectionPage = () => {
    const [product, setProduct] = useState([]);
    const [collection, setCollection] = useState({});
    const {id} = useParams();
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const limit = 8;

    async function getCollection(){
        try {
            let result = await axios.get(`${COLLECTIONS_API}/${id}`)
            setCollection(result.data);
            
        } catch (error) {
            console.error(error)
        }
    }

    async function getProducts(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?collection-id=${id}`)
            setProduct(result.data);
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getProducts();
        getCollection();
    },[]);
    

    useEffect(()=> {
        if(product) setPages(Math.ceil(product.length / limit));
    },[product]);

    return (
        <div className='collection-page__bg'>
            <div className='container'>
                <div >
                    <div className='d-flex justify-content-center'>
                        <h2 className='title'>{collection.title}</h2>
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
                        
                        {product?.slice(0,4).map((item, index)=>(
                            <SwiperSlide key={index}>
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
                    <div>
                        <Pagination pages={pages} active={page} setActive={setPage}/>
                    </div>
                </div> 
                <SimilarProducts title={'Новинки'}/>
                <FloatingButton/>
            </div>
        </div>
    );
};

export default CollectionPage;