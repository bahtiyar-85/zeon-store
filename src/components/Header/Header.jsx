import React  from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Navibar from '../Navibar/Navibar';
import './Header.css';



const Header = ({ setSearchValue }) => {
   
    
    return (
        <div className="header">
            <div className='container'>
                <Navibar setSearchValue={setSearchValue} />
                <BreadCrumbs />
            </div>
        </div>
    );
};

export default Header;