import React, { useEffect, useState } from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import MoreButton from '../MoreButton/MoreButton';
import { COLLECTIONS_API } from '../../helpers/consts';
import axios from 'axios';

const CollectionList = () => {
    const [collection, setCollection] = useState([]);
    const [page, setPage] = useState(1);

    async function getCollection(){
        try {
            let result = await axios.get(`${COLLECTIONS_API}?page=${page}&limit=4`)
            setCollection(result.data);
        } catch (error) {
            console.error(error)
        }
        
    }
    function handleClick() {
        setPage(page+1)
    }

    useEffect(()=>{
        getCollection();
    },[])

    useEffect(()=>{
        getCollection();
    },[page])

    return (
        <div className='d-flex flex-column align-items-center mt-5'>
            <h2 className='title '>Коллекция</h2>
            <div className='d-flex justify-content-between'>
                {collection?.map((item, index)=>(
                    <CollectionItem {...item} key={index}/>
                ))}
            </div>
            <div className='mt-4'>
                <MoreButton handleClick={handleClick}/>

            </div>
        </div>
    );
};

export default CollectionList;