import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Navibar from '../Navibar/Navibar';
import './Header.css';



const Header = ({ setSearchValue }) => {
   
    
    return (
        <div className="header">
            <div className='container'>
                <Navibar setSearchValue={setSearchValue} />
                {/* <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Коллекция</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb> */}
                <BreadCrumbs />
            </div>
        </div>
    );
};

export default Header;