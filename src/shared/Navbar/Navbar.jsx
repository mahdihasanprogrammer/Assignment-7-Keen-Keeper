import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';
import { RiMenu3Fill } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {

const links = <>
    <li>
        <NavLink to='/' className={({isActive}) => `btn border-none ${isActive&& 'bg-green-800 text-white text-base'}`} > <span className='text-base'><AiOutlineHome /></span> Home</NavLink>
    </li>
    
    <li>
        <NavLink className={({isActive}) => `btn border-none ${isActive && 'text-white text-base bg-green-800' }`}
         to='/timeline'> <span className='text-base'><IoTimeOutline /></span>
            Timeline </NavLink>
    </li>

    <li>
        <NavLink className={({isActive}) => `btn border-none ${isActive && ' text-white text-base bg-green-800'}`}
         to='/stats'> <span className='text-base'><ImStatsDots /></span>
         Stats</NavLink>
    </li>
</>


    return(

    <div className='shadow bg-base-100'>
        <div className="  sm:flex justify-between items-center py-4 px-5 md:px-8 lg:px-12 container mx-auto">

            <div className="flex items-center justify-between">

                <h1 className='text-2xl font-bold'>Keen<span className='text-green-800'>Keeper</span></h1>

              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost px-0 text-2xl sm:hidden">
                    <RiMenu3Fill />
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content  right-0 bg-base-100 rounded-box z-1 mt-3 space-y-2 w-36 text-center text-base  shadow">
                
                       {links}
                </ul>
              </div>


            </div>


            <div className=" hidden sm:flex">
              <ul className="flex items-center gap-6 px-1">
                  {links}
              </ul>
            </div>


        </div>
    </div>
    )
}

export default Navbar;