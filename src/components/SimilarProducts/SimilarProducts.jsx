import React, { useEffect, useState } from 'react';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';
import SimilarCard from '../SimilarCard/SimilarCard';
import './SimilarProducts.css';


const SimilarProducts = ({title}) => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
   
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
    },[])

    return (
        <div className='similar-products mt-4 mb-5'>
            <h2 className='title'>{title}</h2>
            <div className='d-flex '>
                {product?.map((item, index)=>(
                        <SimilarCard {...item} key={index}/>
                    ))}
            </div>
        </div>
    );
};

export default SimilarProducts;