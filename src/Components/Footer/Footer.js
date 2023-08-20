import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import  facebook from '../../Assets/icon/Facebook_icon.svg.png';
import  github from '../../Assets/icon/github.webp';
import  linkdin from '../../Assets/icon/linkedin.png';
import  gmail from '../../Assets/icon/gmail.png';
const Footer = () => {
    return (
        <div className='bg-[#3B2F2F] '>
            <footer className="footer p-0 py-10 pb-4 lg:p-10">
                <div className='px-10 py-5 text-white'>
                    <span className="footer-title">Services</span>
                    <p>Font-End Web Development</p>
                    <p>Web Development</p>
                    <p>Basic Back-End Development</p>
                </div>
                <div className='px-10 py-5 text-white'>
                    <span className="footer-title">Social-Media</span>
                    <div className='flex justify-between items-center'>
                        <a href='https://www.facebook.com/pranto.chandrodas.33/' target="_blank" className="link link-hover mr-[20px]">Facebook :</a>
                        <img src={facebook} className='w-10' alt="" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href='https://github.com/prantochandrodas' target="_blank" className="link link-hover  mr-[35px]">Git Hub :</a>
                        <img src={github} className='w-10 rounded-xl' alt="" />
                    </div>
                    <div className='flex justify-between items-center'> 
                        <a href='https://www.linkedin.com/in/pranto-das08/' target="_blank" className="link link-hover mr-[38px]">Linkdin :</a>
                        <img src={linkdin} className='w-10' alt="" />
                    </div>
                </div>
                <div className='px-10 py-5 text-white'>
                    <img src={gmail} className='w-10' alt="" />
                    <span className="">Gmail: prantochandrodas@gmail.com</span>

                </div>
                
            </footer>
            <div className='p-10 pt-4 lg:pl-20 text-white'>
                <p>© Copyright 2023. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;