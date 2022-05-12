import React, { useState }  from 'react';
import AuthModal from '../AuthModal/AuthModal';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Navibar from '../Navibar/Navibar';
import './Header.css';



const Header = ({ setSearchValue }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="header">
            <div className='container'>
                <Navibar setSearchValue={setSearchValue} handleShow={handleShow}/>
                <BreadCrumbs />
                <AuthModal show={show} setShow={setShow} />
            </div>                      
        </div>
    );
};

export default Header;