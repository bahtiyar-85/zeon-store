import React, { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import ProductItem from '../ProductItem/ProductItem';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';

const HitSales = () => {
    const [product, setProduct] = useState([]);
    const [randomProduct, setRandomProduct] = useState([]);
   
    async function getProduct(){
        try {
            let result = await axios.get(`${PRODUCTS_API}`)

            setProduct(result.data);
            getNewArray();
        } catch (error) {
            console.error(error)
        }
    }
    function getNewArray(){
        const length = product.length;
        const newArray = [];
        for(let i=0; i<8; i++){
            let randomIndex = Math.floor(Math.random() * length);
            newArray.push(product[randomIndex]);
        }
        setRandomProduct(newArray);
    } 

    useEffect(()=>{
        getProduct();
    },[])

    useEffect(()=>{
        getNewArray();
    },[product]);

    return (
        <div className='hit-sales d-flex flex-column align-items-center mt-5'>
            <h2 className='title '>Хит продаж</h2>
            <div className='w-100 d-flex justify-content-between flex-wrap'>
                {randomProduct?.map((item, index)=>(
                    <ProductItem {...item} key={index}/>
                ))}
            </div>
            <MoreButton handleClick={getNewArray}/>
        </div>
    );
};

export default HitSales;