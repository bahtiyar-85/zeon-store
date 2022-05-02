import React  from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Navibar from '../Navibar/Navibar';
import './Header.css';



const Header = ({ setSearchValue, searchDropdown }) => {
   
    
    return (
        <div className="header">
            <div className='container'>
                <Navibar setSearchValue={setSearchValue} searchDropdown={searchDropdown}/>
                <BreadCrumbs />
            </div>
        </div>
    );
};

export default Header;