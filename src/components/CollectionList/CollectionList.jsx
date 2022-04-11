import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import MoreButton from '../MoreButton/MoreButton';

const CollectionList = () => {
    return (
        <div className='d-flex flex-column align-items-center mt-5'>
            <h2 className='title '>Коллекция</h2>
            <div className='d-flex justify-content-between w-100'>
                <CollectionItem/>
                <CollectionItem/>
                <CollectionItem/>
                <CollectionItem/>
            </div>
            <div className='mt-4'>
                <MoreButton />

            </div>
        </div>
    );
};

export default CollectionList;