import React from 'react';
import { Container } from 'react-bootstrap';
import Navibar from '../Navibar/Navibar';
import './Header.css';



const Header = () => {
    return (
        <div className="header">
            <Container>
                <Navibar/>
            </Container>
        </div>
    );
};

export default Header;