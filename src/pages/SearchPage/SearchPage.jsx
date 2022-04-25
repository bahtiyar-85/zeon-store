import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Pagination from '../../components/Pagination/Pagination';
import ProductItem from '../../components/ProductItem/ProductItem';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import { PRODUCTS_API } from '../../helpers/consts';
import './SearchPage.css';

const SearchPage = ({searchValue}) => {
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
                
            }   
            else {
                setEmptyQuery(true);
                console.log('emptyQuery', emptyQuery);
            }
            
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if(searchValue){
            searchQuery();
        }
    },[]);

    useEffect(() => {
        if(searchValue){
            searchQuery();
        }
    
    },[searchValue]);


    return (
        <div className='container search-page'>
             <h2 className='title'>Результаты поиска по запросу: {searchValue}</h2>
            {emptyQuery ? (
                <>
                    <h3>По Вашему запросу ничего не найдено.</h3>
                    <SimilarProducts title={'Возможно Вас заинтересует'}/>
                </>
            ) : (
                <>
                    <div className='d-flex flex-wrap'>
                        {searchResult?.slice((page-1)*8, page*8).map((item, index)=>(
                                <ProductItem {...item} key={index}/>
                            ))}
                       
                    </div>
                    {pages ? (
                        <div className='d-flex flex-row-reverse mb-5 mt-4'>
                            <Pagination pages={pages} active={page} setActive={setPage}/>
                        </div>
                    ) : null}
                </> 

            )} 
            <FloatingButton/>
        </div>
    );
};

export default SearchPage;