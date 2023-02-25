import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer p-0 py-10 lg:p-10 text-base-content">
                    <div className='px-10 py-5'>
                        <span className="footer-title">Services</span>
                        <p>Font-End Web Development</p>
                    </div>
                    <div className='px-10 py-5'>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className='px-10 py-5'>
                        <span className="footer-title">Email:-</span><span className="">prantochandrodas@gmail.com</span>
                        
                    </div>
            </footer>
        </div>
    );
};

export default Footer;