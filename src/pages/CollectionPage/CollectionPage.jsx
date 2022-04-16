import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import './CollectionPage.css';
import { PRODUCTS_API, COLLECTIONS_API } from '../../helpers/consts';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';

const CollectionPage = () => {
    const [product, setProduct] = useState([]);
    const [collection, setCollection] = useState({});
    const {id} = useParams();
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const limit = 4;

    async function getCollection(){
        try {
            let result = await axios.get(`${COLLECTIONS_API}/${id}`)
            setCollection(result.data);
            
        } catch (error) {
            console.error(error)
        }
    }

    async function getProducts(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?collection-id=${id}`)
            setProduct(result.data);
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getProducts();
        getCollection();
    },[]);
    

    useEffect(()=> {
        if(product) setPages(Math.ceil(product.length / limit));
    },[product]);

    return (
        <div className='container'>
            <div>
                <h2 className='title'>{collection.title}</h2>
                <div className='w-100 d-flex flex-wrap'>
                    {product?.map((item, index)=>(
                        <ProductItem {...item} key={index}/>
                    ))} 
                </div>
                <div>
                    {/* <Pagination pages={pages} active={page} setActive={setPage}/> */}
                </div>
            </div> 
            <SimilarProducts title={'Новинки'}/>
        </div>
    );
};

export default CollectionPage;