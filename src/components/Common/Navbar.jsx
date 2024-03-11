import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import Logo from "../../assets/Logo.jpg"
import { NavbarLinks } from '../../data/nav-links'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import ProfileDropDown from './ProfileDropDown'



const Navbar = () => {



//   location matching and color 
    const location = useLocation();
    const matchRoute = (route) => {
      return matchPath({ path: route }, location.pathname);
    };


  return (
    <div className="flex h-14 items-center bg-richblack-800 justify-center border-b-[1px] border-b-richblack-700">
    <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent   gap-[32px]">
      {/* first */}
      <Link to="/">
        <img
          src={Logo}
          alt="logo image"
          className='rounded-md'
          width={70}
          height={70}
          loading="lazy"
        />
      </Link>

      {/* second */}
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-x-6 text-richblack-25">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              {
         
                <Link to={link.path}>
                  <p
                    className={`${
                      matchRoute(link.path)
                        ? "text-sky-100"
                        : "text-richblack-25"
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              }
            </li>
          ))}
        </ul>
      </nav>

      {/* third   */}
      
      <div className="hidden items-center gap-x-4 md:flex">  
          <AiOutlineShoppingCart className='text-white cursor-pointer ' />    
             <ProfileDropDown />
      </div>
      <button className="mr-4 md:hidden">
        <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
      </button>
    </div>
  </div>
  )
}

export default Navbar
