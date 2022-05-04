import React, { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import ProductItem from '../ProductItem/ProductItem';
import MySwiper from '../MySwiper/MySwiper';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';
import './Novelties.css'

const Novelties = () => {
   
    const [page, setPage] = useState(2);
    const [buffer, setBuffer] = useState([]);
    const [endQuery, setEndQuery] = useState(false);
   
    async function getProduct(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?page=${page}&limit=4`)
            setBuffer([...buffer, result.data]);
            if(result.data.length!==4) setEndQuery(true);
        } catch (error) {
            console.error(error)
        }
        
    }
    function handleClick(){
        if(!endQuery) setPage(prev => prev + 1);
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
                {buffer.map((item, index)=>{
                        return (
                        <MySwiper ProductItem={ProductItem} item={item} key={index}/>
                )})}
            <div className='d-flex justify-content-center'>
                <MoreButton handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default Novelties;