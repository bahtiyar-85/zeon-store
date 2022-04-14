import React from 'react';
import { Container } from 'react-bootstrap';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import './Collections.css'

const Collections = () => {
    return (
        <div>
            <Container>
                <h2 className='title'>Коллекция</h2>
                <div>
                    <CollectionItem/>
                    <CollectionItem/>
                    <CollectionItem/>
                    <CollectionItem/>
                </div>
                пагинация
            </Container>
        </div>
    );
};

export default Collections;