import React, { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import ProductItem from '../ProductItem/ProductItem';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';

const Novelties = () => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
   
    async function getProduct(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?page=${page}&limit=4`)
            console.log(result)
            setProduct(result.data);
        } catch (error) {
            console.error(error)
        }
        
    }
    useEffect(()=>{
        getProduct();
    },[])

    return (
        <div className='novelties d-flex flex-column align-items-center mt-5'>
            <h2 className='title '>Новинки</h2>
            <div className='w-100 d-flex justify-content-between'>
                {product?.map((item, index)=>(
                        <ProductItem {...item} key={index}/>
                    ))}
            </div>
            <MoreButton/>
        </div>
    );
};

export default Novelties;