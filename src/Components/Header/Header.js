import React from 'react';
import './Header.css';
import myPhoto from '../../Assets/pranto-removebg-preview.png';
import resume from '../../resume/Pranto Das Front End Resume (1).pdf'
const Header = () => {
    return (
        <div className='header' id='Home'>
            
           <div className='lg:w-[90%] lg:mx-auto sm:mx-0 lg:mt-8 mt-0'>
                <div className="hero min-h-screen ">
                        <div className="hero-content block lg:flex">
                         
                             <img src={myPhoto} alt="" className="lg:max-w-sm  lg:align mb-0 pt-14  rounded-lg shadow " />
                         
                            <div>
                                <h1 className="lg:text-2xl text-2xl font-bold">Pranto Das</h1>
                                <p className="lg:text-2xl text-lg  mt-2">Front-End Web Developer.Based in Dhaka,Bangladesh</p>
                                <p className='lg:text-2xl text-lg mt-2'>Download Resume</p>
                               <a  href={resume} variant="contained" download> <button className="btn btn-primary mt-5">Resume</button></a>
                            </div>
                        </div>
                    </div>
           </div>

        </div>
    );
};

export default Header;