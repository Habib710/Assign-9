import React from 'react';

import CustomLink from '../customLink/CostomLink';
import './header.css';

const Header = () => {
    return (
        <div className='costom'>
           
            <nav className='nav'>

                <CustomLink to="/" >HOME</CustomLink>
                <CustomLink to="/Review" >REVIEW</CustomLink>
                <CustomLink to="/desboard" >DASHBOARD</CustomLink>
                <CustomLink to="/blog" >BLOGS</CustomLink>
                <CustomLink to="/about" >ABOUT</CustomLink>
              
                
              

            </nav>
            
        </div>
    );
};

export default Header;