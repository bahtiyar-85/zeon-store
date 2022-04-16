import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';

const ProductPage = () => {
    const location = useLocation();
    const {id} = useParams();
    const [product, setProduct] = useState({});
    

    async function getProduct(id){
        try {
            let result = await axios.get(`${PRODUCTS_API}/${id}`)
            setProduct(result.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getProduct(id);
    },[]);

    useEffect(()=>{
        getProduct(id);
    },[location])
    
    return (
        
            <div className='container'>
                <ProductCard {...product}/>
                <SimilarProducts title={'Похожие товары'}/>
            </div>
       
    );
};

export default ProductPage;