import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
// import {FaBarsStaggerered, FaXmark} from "react-icons/fa6"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    const handlerMenuToggler=()=>{
      setIsMenuOpen(!isMenuOpen);
    };
    const navItems = [
        {path:"/",title:"Start a search"},
        {path:"/my-job",title:"My Jobs"},
        {path:"/salary",title:"Salary Estimate"},
        {path:"/post-job",title:"Post a Job"},
    ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black"><img src="/public/images/logo.png"/><span>Job Portal</span></a>
        {/*Nav items for large devices */}
         <ul className="hidden md:flex gap-12">
            {
                navItems.map(({path,title}) =>(
                    <li key={path} classname="text-base text-primary">
                         <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active": ""
                    }>
                    {title}
                  </NavLink>
                    </li>
                ))
            }
         </ul>
         {/* signup and login button*/}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
        <Link to="/login" className="py-2 px-5 border rounded  bg-blue text-white">Login</Link>
        <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign up</Link>
        </div>
        {/*Mobile menu */}
        {/* <div className="md:hidden block">
            <button onClick={handlerMenuToggler}>{
            isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/>:<FaBarsStaggerered className="w-5 h-5 text-primary"/>
            }
            
            </button>
        </div> */}
        </nav>
        {/* */}
        </header>
  )
}

export default Navbar