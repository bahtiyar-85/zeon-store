import React, { useEffect, useState } from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import MoreButton from '../MoreButton/MoreButton';
import { COLLECTIONS_API } from '../../helpers/consts';
import axios from 'axios';

const CollectionList = () => {
    const [collection, setCollection] = useState([]);
    const [newCol, setNewCol] = useState([]);

    async function getCollection(){
        try {
            let result = await axios.get(`${COLLECTIONS_API}`)
            setCollection(result.data);
        } catch (error) {
            console.error(error)
        } 
    }

    function getNewArray(){
        const length = collection.length;
        const newArray = [];
        for(let i=0; i<4; i++){
            let randomIndex = Math.floor(Math.random() * length);
            newArray.push(collection[randomIndex]);
        }
        setNewCol(newArray);
    } 

    useEffect(()=>{
        getCollection();
    },[])

    useEffect(()=>{
        getNewArray()
    },[collection])

    return (
        <div className='d-flex flex-column align-items-center mt-5'>
            <h2 className='title '>Коллекция</h2>
            <div className='d-flex justify-content-between'>
                {newCol?.map((item, index)=>(
                    <CollectionItem {...item} key={index}/>
                ))}
            </div>
            <div className='mt-4'>
                <MoreButton handleClick={getNewArray}/>

            </div>
        </div>
    );
};

export default CollectionList;