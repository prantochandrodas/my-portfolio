import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, IconName } from "react-icons/fa";
const Contact = () => {
  
    const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_dy9fpfh', 'template_v8r17qf', form.current, 'FqD8ZBIFTHtTxuI_O')
      .then((result) => {
      
          console.log(result.text);
          toast.success('Sucessfully Send', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
      }, (error) => {
        
          console.log(error.text);
      });
  };
 
    return (
        <div className='my-10' id='Contact'>
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
                            <form  ref={form} onSubmit={sendEmail}>
                                <h1>Send message</h1>
                                <div className="inputBox">
                                    <input type="text"  name="name" required/>
                                    <span>Full Name</span>
                                </div>
                                <div className="inputBox">
                                    <input type="email" name="user_email" required/>
                                    <span>Email</span>
                                </div>
                                <div className="inputBox">
                                    <textarea name="message" id="" cols="20" rows="2" required></textarea>
                                    <span>Type Your Message...</span>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="send"  />
                                </div>
                            </form>
                        </div>
                </div>
            </section>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;