import React, { useEffect, useState } from 'react';
import './BreadCrumbs.css';
import { COLLECTIONS_API, PRODUCTS_API } from '../../helpers/consts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const BreadCrumbs = () => {
    const location = useLocation();
    const [colTitle, setColTitle] = useState('');
    const [prodTitle, setProdTitle] = useState('');
    const [colId, setColId] = useState('');
    

    useEffect(()=>{
        const paths = location.pathname.split('/');
        if(paths[1].includes('collection') && paths.length===3) {
            query(paths[2]);
        } else if(paths[1].includes('product') && paths.length===3){
            queryProduct(paths[2]);
        };
    }, [location]);
   
    const query = async (id) => {
        try {
            let result = await axios.get(`${COLLECTIONS_API}/${id}`);
            setColTitle(result.data.title);
            setColId(result.data.id);
        } catch (error) {
            console.error(error)
        }        
    }

    const queryProduct = async (id) => {
        try {
            let result = await axios.get(`${PRODUCTS_API}/${id}`)
            setProdTitle(result.data.title);
            query(result.data['collection-id']);
        } catch (error) {
            console.error(error)
        }        
    }

    const  crumbs = () => {
        const paths = location.pathname.split('/');
        let buffer = [];
        buffer.push(<span key={1} className='br'><a href='/'>Главная</a><span className='crumbs-m'>/</span></span>);
        switch (paths[1]){
            case 'about-us':
                buffer.push(<span key={2}  className='crumbs-activ'>О нас</span>);
                break;
            case 'search':
                buffer.push(<span key={2}  className='crumbs-activ'>Результаты поиска</span>);
                break; 
            case 'cart':
                 buffer.push(<span key={2}  className='crumbs-activ'>Корзина</span>);
                break;       
            case 'news':
                buffer.push(<span key={2} className='crumbs-activ'>Новости</span>);
                break;
            case 'help':
                buffer.push(<span key={2}  className='crumbs-activ'>Помощь</span>);
                break;
            case 'collections':
                buffer.push(<span key={2}  className='crumbs-activ'>Коллекции</span>);
                break;
            case 'collection':
                buffer.push(<span key={2} ><a href='/collections'>Коллекции</a><span className='crumbs-m'>/</span><span className='crumbs-activ'>{colTitle}</span></span>);
                break;
            case 'product':
                buffer.push(<span key={2} ><a href='/collections'>Коллекции</a><span className='crumbs-m'>/</span><a href={`/collection/${colId}`}>{colTitle}</a><span className='crumbs-m'>/</span><span className='crumbs-activ'>{prodTitle}</span></span>);
                break;
        }
        return buffer;
    }
         
    return (
        <>
        {location.pathname!=='/' ? (
            <div className='breadcrumbs'>
                {crumbs()}    
            </div>
        ): null}
        </>   
    );
};

export default BreadCrumbs;