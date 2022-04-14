import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';

const ProductPage = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    async function getProduct(id){
        try {
            let result = await axios.get(`${PRODUCTS_API}/${id}`)
            console.log('product id', result)
            setProduct(result.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getProduct(id);
    },[])
    return (
        
            <div className='container'>
                <ProductCard {...product}/>
                <SimilarProducts />
            </div>
       
    );
};

export default ProductPage;