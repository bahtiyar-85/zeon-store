import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Pagination from '../../components/Pagination/Pagination';
import ProductItem from '../../components/ProductItem/ProductItem';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import { PRODUCTS_API } from '../../helpers/consts';
import './SearchPage.css';

const SearchPage = ({searchValue, setSearchDropdown}) => {
    const [searchResult, setSearchResult] = useState([]);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);
    const [emptyQuery, setEmptyQuery] = useState(false);

    async function searchQuery(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?search=${searchValue}`)
            console.log('result.data', result.data);
            if(result.data.length!==0) {
                setSearchResult(result.data);
                setPages(Math.ceil(result.data.length/8));
                setEmptyQuery(false);
                setSearchDropdown(prev => [searchValue, ...prev]);
            }   
            else {
                setEmptyQuery(true);
                console.log('emptyQuery', emptyQuery);
            }
            
        } catch (error) {
            console.error('Ошибка',error)
            setEmptyQuery(true);
        }
    }
    // useEffect(() => {
    //     if(searchValue){
    //         searchQuery();
    //     }
    // },[]);

    useEffect(() => {
        if(searchValue){
            searchQuery();
        }
    },[searchValue]);


    return (
        <div className='search-page__bg'>
            <div className='container search-page pt-3'>
                <h2 className='title'>Результаты поиска по запросу: {searchValue}</h2>
                {emptyQuery ? (
                    <>
                        <h3>По Вашему запросу ничего не найдено.</h3>
                        <SimilarProducts title={'Возможно Вас заинтересует'}/>
                    </>
                ) : (
                    <>
                        <div className=''>
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
                                {searchResult?.slice((page-1)*8, page*8).slice(0,4).map((item, index)=>(
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
                                {searchResult?.slice((page-1)*8, page*8).slice(4).map((item, index)=>(
                                        <SwiperSlide key={index}>
                                            <ProductItem {...item} />
                                        </SwiperSlide>
                                    ))}
                            </Swiper>   
                        </div>
                        {pages ? (
                            <div className='d-flex flex-row-reverse pb-5 mt-4'>
                                <Pagination pages={pages} active={page} setActive={setPage}/>
                            </div>
                        ) : null}
                    </> 

                )} 
                <FloatingButton/>
            </div>
        </div>
    );
};

export default SearchPage;