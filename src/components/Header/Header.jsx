import React from 'react';
import { Container } from 'react-bootstrap';
import Navibar from '../Navibar/Navibar';
import './Header.css';



const Header = () => {
    return (
        <div className="header container">
          
                <Navibar/>
           
        </div>
    );
};

export default Header;