import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import resume from "../../resume/Pranto Das Front End Developer Resume (3).pdf";
import { tab } from '@testing-library/user-event/dist/tab';
const Navbar = () => {
    const [fix, setFix] = useState(false);
    function setFixed() {
        if (window.scrollY >= 100) {
            setFix(true);
        } else {
            setFix(false);
        }
    }
    window.addEventListener("scroll", setFixed)
    const menu = <>
        <Link to='#Home'> <li className='lg:ml-5 text-lg  font-[500]'>Home</li></Link>
        <Link to='#Skills'> <li className='lg:ml-5 text-lg font-[500]'>Skills</li></Link>
        <Link to='#About'> <li className='lg:ml-5 text-lg font-[500]'>About</li></Link>
        <Link to='#Projects'> <li className='lg:ml-5 text-lg font-[500]'>Projects</li></Link>
        <Link to='#Contact'> <li className='lg:ml-5 text-lg font-[500]'>Contact</li></Link>
    </>


    return (
       
        <div className="navbar NavSticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0}  className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={`0? 1:1`} className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <img src={logo} className='w-[150px]' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
            <a className="btn" variant="contained" href={resume} download>Resume</a>
            </div>
        </div>
    );
};

export default Navbar;