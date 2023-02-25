import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import resume from"../../resume/Pranto Das Front End Resume (1).pdf";
const Navbar = () => {
    const menu=<>
       <Link to='/'> <li className='lg:ml-5'>Home</li></Link>
        <li className='lg:ml-5'>Contect</li>
    </>

    
    return (
        <div>
            <div className="navbar backc border-b">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {menu}
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {menu}
                    </ul>
                </div>
                </div>
                
                <div className="navbar-end">
                    <a className="btn" variant="contained" href={resume} download>Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;