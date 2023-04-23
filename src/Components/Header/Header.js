import React from 'react';
import './Header.css';
import myPhoto from '../../Assets/pranto-removebg-preview.png';
import resume from '../../resume/Pranto Das Front End Developer Resume (3).pdf'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import Navbar from '../Navbar/Navbar';
import banner from '../../Assets/banenr/banner1.jpg'
import Lottie from 'react-lottie';
import animation from '../../animation.json'
const Header = () => {
    const { text } = useTypewriter({
        words: ['Front-End Developer', 'React-Developer', 'MERN-Stack Developer'],
        loop: {}
    });
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };
    return (
        <div className='header' id='Home'>
            <Navbar></Navbar>
            <div className='lg:flex-row justify-center items-center flex-col flex  lg:w-[90%] lg:mx-auto mx-0  my-12 mt-0 py-10'>
                <div className='lg:w-[500px] w-[90%] lg:mx-0 mx-auto text-white lg:pb-32  lg:pt-12  py-12'>
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
                <div className='lg:w-[500px] lg:h-full h-[300px]'>
                    <Lottie options={defaultOptions}
                    width={370}/>
                </div>
            </div>

        </div>
    );
};

export default Header;