import React from 'react';
import './Header.css';
import myPhoto from '../../Assets/pranto-removebg-preview.png';
import resume from '../../resume/Pranto Das Front End Resume (1).pdf'
const Header = () => {
    return (
        <div className='header'>
            
           <div className='lg:w-[90%] mx-auto'>
                <div className="hero min-h-screen ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={myPhoto} alt="" className="lg:max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Pranto Das</h1>
                                <p className="text-4xl mt-6">Front-End Web Developer.Based in Dhaka,Bangladesh</p>
                                <p className='text-xl mt-4'>Download Resume</p>
                               <a  href={resume} variant="contained" download> <button className="btn btn-primary mt-5">Resume</button></a>
                            </div>
                        </div>
                    </div>
           </div>

        </div>
    );
};

export default Header;