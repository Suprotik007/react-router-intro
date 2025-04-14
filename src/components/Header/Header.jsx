import React from 'react';
import { Link ,NavLink} from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <nav className='nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Mobile'>Mobiles</NavLink>
                <NavLink to='/laptop'>Laptops</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/users2'>Users(2)</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;