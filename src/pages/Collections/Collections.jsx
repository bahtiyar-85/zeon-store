import React, { useEffect, useState } from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import './Collections.css';
import { COLLECTIONS_API } from '../../helpers/consts';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

const Collections = () => {

    const [collections, setCollections] = useState([]);
    const [page, setPage] = useState(1);
    const pages = 2;

   
    async function getCollections(){
        try {
            let result = await axios.get(`${COLLECTIONS_API}?page=${page}&limit=8`)
            
            setCollections(result.data);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        getCollections();
    },[]);

    useEffect(()=>{
        getCollections();
    },[page])


    return (
        <div className='container col-height'>
        
                <h2 className='title'>Коллекция</h2>
                <div className='d-flex flex-wrap collections__height'>
                   
                    {collections?.map((item, index)=>(
                        <CollectionItem {...item} key={index}/>
                    ))}

                </div>
                <div className='d-flex flex-row-reverse mb-5 mt-4'>
                    <Pagination pages={pages} active={page} setActive={setPage}/>
                </div>
                <FloatingButton/>
        </div>
    );
};

export default Collections;