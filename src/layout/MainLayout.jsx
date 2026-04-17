
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Navbar/>
            <Suspense fallback={<p>route loading...</p>}>
                <Outlet/>
            </Suspense>
            <Footer/>
        </div>
    );
};

export default MainLayout;