import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { OFFER_API } from '../../helpers/consts';
import './OfferPage.css';

const OfferPage = () => {
    const [offer, setOffer] = useState({});
    console.log(offer);
    async function getData(){
        try {
            let result = await axios.get(`${OFFER_API}`)
            setOffer(result.data[0]);
         
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        getData();
    },[])

    return (
        <div className='container offer'>
            <h2 className='title'> {offer.title}</h2>
            {offer?.body?.map((item, index)=> (
                <p key={index} >{item}</p>
            ))}
        </div>
    );
};

export default OfferPage;