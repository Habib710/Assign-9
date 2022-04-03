import React from 'react';

import CustomLink from '../customLink/CostomLink';
import './header.css';

const Header = () => {
    return (
        <div className='costom'>
           
            <nav className='nav'>

                <CustomLink to="/" >HOME</CustomLink>
                <CustomLink to="/Review" >REVIEW</CustomLink>
                <CustomLink to="/desboard" >DASBOARD</CustomLink>
                <CustomLink to="/about" >ABOUR</CustomLink>
                <CustomLink to="/more" >MORE</CustomLink>
                
              

            </nav>
            
        </div>
    );
};

export default Header;