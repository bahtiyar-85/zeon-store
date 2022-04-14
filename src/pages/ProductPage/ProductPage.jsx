import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';

const ProductPage = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    async function getProduct(id){
        try {
            let result = await axios.get(`${PRODUCTS_API}/${id}`)
            console.log('product id', result)
            setProduct(result)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
       
        console.log('id', id)
    },[])
    return (
        <div>
            <ProductCard product={product}/>
        </div>
    );
};

export default ProductPage;