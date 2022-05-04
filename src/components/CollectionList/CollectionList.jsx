import React, { useEffect, useState } from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import MoreButton from '../MoreButton/MoreButton';
import { COLLECTIONS_API } from '../../helpers/consts';
import axios from 'axios';
import MySwiper from '../MySwiper/MySwiper';

const CollectionList = () => {
   
    const [page, setPage] = useState(1);
    const [buffer, setBuffer] = useState([]);
    const [endQuery, setEndQuery] = useState(false);

    async function getCollection(){
        try {
            let result = await axios.get(`${COLLECTIONS_API}?page=${page}&limit=4`)
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
        getCollection();
    },[])

    useEffect(()=>{
        getCollection();
    },[page])

    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-center'>
                <h2 className='title '>Коллекция</h2>
            </div>
                {buffer.map((item, index)=>{
                        return (
                        <MySwiper ProductItem={CollectionItem} item={item} key={index}/>
                )})}
            <div className='mt-4 d-flex justify-content-center'>
                <MoreButton handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default CollectionList;