import React from 'react';
import './Header.css';
import myPhoto from '../../Assets/pranto-removebg-preview.png';
import resume from '../../resume/Pranto Das Front End Developer Resume (3).pdf'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import Navbar from '../Navbar/Navbar';
import banner from '../../Assets/banenr/banner1.jpg'
const Header = () => {
    const { text } = useTypewriter({
        words: ['Front-End Developer', 'React-Developer', 'MERN-Stack Developer'],
        loop: {}
    })
    return (
        <div className='header animation' id='Home' style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <Navbar></Navbar>
            <div className='lg:w-[90%] lg:mx-auto sm:mx-0 lg:my-20 sm:my-12 mt-0'>
                <div className='text-white lg:pb-32  lg:pt-12  sm:py-12'>
                    <h1 className="lg:text-5xl text-2xl font-bold">Pranto Das</h1>
                    <div>
                        <p className="lg:text-4xl text-lg  mt-2">I am <Typewriter
                                words={['Front-End Developer', 'React-Developer', 'MERN-Stack Developer']}
                                loop={2000}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /> 
                            
                            
                        </p>
                    </div>
                    <p className='lg:text-2xl text-lg mt-2'>Download Resume</p>
                    <a href={resume} variant="contained" download> <button className="btn btn-primary mt-5">Resume</button></a>
                </div>
            </div>

        </div>
    );
};

export default Header;