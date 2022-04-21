import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import ProductItem from '../../components/ProductItem/ProductItem';
import { PRODUCTS_API } from '../../helpers/consts';
import './SearchPage.css';

const SearchPage = ({searchValue}) => {
    const [searchResult, setSearchResult] = useState([]);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);

    async function searchQuery(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?search=${searchValue}`)
            console.log('result.data', result.data);
            setSearchResult(result.data);
           
            setPages(Math.ceil(result.data.length/8));
           
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        searchQuery();
        
    },[]);

    useEffect(() => {
        searchQuery();
        console.log('search result', searchResult);
        console.log('pages', pages);
    },[searchValue]);


    return (
        <div className='container'>
              <h2 className='title'>Результаты поиска по запросу: {searchValue}</h2>
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
        </div>
    );
};

export default SearchPage;