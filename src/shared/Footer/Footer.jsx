import React from 'react';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
    return (
     
<div className='bg-green-900 '>
  <footer className="footer footer-horizontal footer-center  text-primary-content container mx-auto px-5 pt-10 pb-6 md:pt-20 md:pb-10 md:px-8 lg:px-12 gap-6">

  <aside>
    
    <h1 className="font-bold text-5xl ">Keen<span className='text-green-600'>Keeper</span> </h1>
    <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  </aside>

  <nav className='pb-5 md:pb-8'>
    <h1 className='text-xl font-medium mb-3'>Social Links</h1>
    <div className="grid grid-flow-col gap-4">

        <span className='p-2 cursor-pointer text-xl  bg-base-100 text-black rounded-full'> <GrInstagram  /></span>
        
        <span className='p-2 cursor-pointer text-xl  bg-base-100 text-black rounded-full'>     <FaSquareFacebook /></span>
   

        <span className='p-2 cursor-pointer text-xl  bg-base-100 text-black rounded-full'><FaXTwitter /></span>
        
    </div>
  </nav>

  <div className='flex flex-col items-center md:flex-row md:justify-between w-full text-gray-400 pt-5 md:pt-8 border-t border-green-800'>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      <ul className='flex items-center gap-3'>
        <li>Privacy Policy </li>
        <li>Terms of Service </li>
        <li>Cookies</li>
      </ul>
  </div>
</footer>
        </div>
    );
};

export default Footer;