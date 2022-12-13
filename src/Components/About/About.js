import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fa4, faEnvelope, faLocationDot, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myPhoto from "../../Assets/pranto.jpg";
const About = () => {
    return (
        <div className='lg:w-[90%] mx-auto'>
            <h1 className='text-center my-10 text-3xl font-bold underline  underline-offset-4'>About Me</h1>
            <div className='lg:px-40 px-4'>
                <div>
                    <h1 className='text-2xl font-bold '>Pranto Das,Front-End Developer</h1>
                    <p className='text-xl'>
                        I am Pranto Das. I am a passionate Front End Web  developer. I am a professional at creating websites with  React, Express.js and MongoDB. I am a  dedicated web developer. I have a goal to establish my career as a Front End Web Developer . I am very much  interested  in learning a new language of development .
                    </p>
                </div>
                <div className='mt-10'>
                        {/* <div className='flex items-center'>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <p className='text-xl ml-2'><span className='font-bold'>Location:</span> Dhaka, Bangladesh.</p>
                        </div>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <p className='text-xl ml-2'><span className='font-bold'>Email:</span> prantochandrodas@gmail.com</p>
                        </div> */}
                        <div className='flex'>
                            <a href="https://www.facebook.com/pranto.chandrodas.33/"><div className='text-3xl mr-2'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></div></a>
                            <a href="https://github.com/prantochandrodas"><div className='text-3xl mr-2'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></div></a>
                            <a href="https://www.linkedin.com/in/pranto-das08/"><div className='text-3xl mr-2'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></div></a>
                            <a href="https://twitter.com/Pranto51377097"><div className='text-3xl mr-2'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></div></a>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default About;