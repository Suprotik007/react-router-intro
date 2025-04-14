import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
        <div className='side'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;