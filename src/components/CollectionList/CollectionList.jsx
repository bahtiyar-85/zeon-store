import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import CollectionItem from '../CollectionItem/CollectionItem';
import MoreButton from '../MoreButton/MoreButton';
import { COLLECTIONS_API } from '../../helpers/consts';
import axios from 'axios';

const CollectionList = () => {
    const [collection, setCollection] = useState([]);
   const [page, setPage] = useState(1);

    async function getCollection(){
        try {
            let result = await axios.get(`${COLLECTIONS_API}?page=${page}&limit=4`)
            setCollection(result.data);
        } catch (error) {
            console.error(error)
        } 
    }

    function handleClick(){
        if(collection.length!==4) setPage(1);
        else setPage(prev => prev + 1);
    }

    useEffect(()=>{
        getCollection();
    },[])

    useEffect(()=>{
        getCollection();
    },[page])

    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-center'>
                <h2 className='title '>Коллекция</h2>
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
                {collection?.map((item, index)=>(
                    <SwiperSlide key={index}>
                        <CollectionItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='mt-4 d-flex justify-content-center'>
                <MoreButton handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default CollectionList;