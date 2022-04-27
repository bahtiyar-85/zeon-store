import React, { useEffect, useState } from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { Swiper, SwiperSlide } from "swiper/react";
import { COLLECTIONS_API } from '../../helpers/consts';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import './Collections.css';

const Collections = () => {

    const [collections, setCollections] = useState([]);
    const [page, setPage] = useState(1);
    const pages = 2;

   
    async function getCollections(){
        try {
            let result = await axios.get(`${COLLECTIONS_API}?page=${page}&limit=8`)
            
            setCollections(result.data);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        getCollections();
    },[]);

    useEffect(()=>{
        getCollections();
    },[page])


    return (
        <div className='container col-height'>
                <div className='d-flex justify-content-center'>
                    <h2 className='title'>Коллекция</h2>
                </div>
                <div className=' collections__height'>
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
                        {collections?.slice(0,4).map((item, index)=>(
                            <SwiperSlide key={index}>
                                <CollectionItem {...item} />
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
                        {collections?.slice(4).map((item, index)=>(
                            <SwiperSlide key={index}>
                                <CollectionItem {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='d-flex flex-row-reverse mb-5 mt-4'>
                    <Pagination pages={pages} active={page} setActive={setPage}/>
                </div>
                <FloatingButton/>
        </div>
    );
};

export default Collections;