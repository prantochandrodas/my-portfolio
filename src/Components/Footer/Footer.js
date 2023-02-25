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
                    <p>Web Development</p>
                    <p>Basic Back-End Development</p>
                </div>
                <div className='px-10 py-5'>
                    <span className="footer-title">Social-Media</span>
                    <div>
                        <a href='https://www.facebook.com/pranto.chandrodas.33/' target="_blank" className="link link-hover mr-2">Facebook</a><FontAwesomeIcon icon={faFacebook} size="lg"></FontAwesomeIcon>
                    </div>
                    <div>
                        <a href='https://github.com/prantochandrodas' target="_blank" className="link link-hover  mr-2">Git Hub</a><FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/pranto-das08/' target="_blank" className="link link-hover mr-2">Linkdin</a><FontAwesomeIcon icon={faLinkedin} size="lg"></FontAwesomeIcon>
                    </div>
                </div>
                <div className='px-10 py-5'>
                    <span className="footer-title">Email:-</span><span className="">prantochandrodas@gmail.com</span>

                </div>
            </footer>
        </div>
    );
};

export default Footer;