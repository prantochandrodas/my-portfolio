import React from 'react';
import './Contact.css'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, IconName } from "react-icons/fa";
const Contact = () => {
    return (
        <div className='my-10'>
            <section className='contact'>
                <div className='content'>
                    <h2>Contact Me</h2>
                    <p>Hello, I am a Front-End Web Developer.Send Message if you want to contact.</p>
                </div>
                <div className='container'>
                    <div className='contactInfo'>
                        <div className='box'>
                            <div className='icon'><FaMapMarkerAlt></FaMapMarkerAlt></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>Bangladesh,Dhaka/Saver</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon'><FaPhoneAlt></FaPhoneAlt></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+8801724928794</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon'><FaEnvelope></FaEnvelope></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>prantochandrodas@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='contactForm'>
                            <form action="">
                                <h1>Send message</h1>
                                <div className="inputBox">
                                    <input type="text" name='' required/>
                                    <span>Full Name</span>
                                </div>
                                <div className="inputBox">
                                    <input type="email" name=''required/>
                                    <span>Email</span>
                                </div>
                                <div className="inputBox">
                                    <textarea name="" id="" cols="20" rows="2" required></textarea>
                                    <span>Type Your Message...</span>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="send"  />
                                </div>
                            </form>
                        </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;