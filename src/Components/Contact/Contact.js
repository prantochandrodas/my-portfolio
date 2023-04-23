import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import facebook from '../../Assets/icon/Facebook_icon.svg.png';
import github from '../../Assets/icon/github.webp';
import linkdin from '../../Assets/icon/linkedin.png';
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
        // <div className='my-10' id='Contact'>
        //     <section className='contact'>
        //         <div className='content'>
        //             <h2>Contact Me</h2>
        //             <p>Hello, I am a Front-End Web Developer.Send Message if you want to contact.</p>
        //         </div>
        //         <div className='container'>
        //             <div className='contactInfo'>
        //                 <div className='box'>
        //                     <div className='icon'><FaMapMarkerAlt></FaMapMarkerAlt></div>
        //                     <div className="text">
        //                         <h3>Address</h3>
        //                         <p>Bangladesh,Dhaka/Saver</p>
        //                     </div>
        //                 </div>
        //                 <div className='box'>
        //                     <div className='icon'><FaPhoneAlt></FaPhoneAlt></div>
        //                     <div className="text">
        //                         <h3>Phone</h3>
        //                         <p>+8801724928794</p>
        //                     </div>
        //                 </div>
        //                 <div className='box'>
        //                     <div className='icon'><FaEnvelope></FaEnvelope></div>
        //                     <div className="text">
        //                         <h3>Email</h3>
        //                         <p>prantochandrodas@gmail.com</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='contactForm'>
        //                     <form  ref={form} onSubmit={sendEmail}>
        //                         <h1>Send message</h1>
        //                         <div className="inputBox">
        //                             <input type="text"  name="name" required/>
        //                             <span>Full Name</span>
        //                         </div>
        //                         <div className="inputBox">
        //                             <input type="email" name="user_email" required/>
        //                             <span>Email</span>
        //                         </div>
        //                         <div className="inputBox">
        //                             <textarea name="message" id="" cols="20" rows="2" required></textarea>
        //                             <span>Type Your Message...</span>
        //                         </div>
        //                         <div className="inputBox">
        //                             <input type="submit" value="send"  />
        //                         </div>
        //                     </form>
        //                 </div>
        //         </div>
        //     </section>
        <section class="">
    <div class="w-[90%] px-6 py-12 mx-auto lg:my-10">
    <h1 className='text-center text-xl font-semibold'>Contact Me</h1>
        <div class="lg:flex lg:items-center lg:-mx-6">
            <div class="lg:w-1/2 lg:mx-6">
                <h1 class="text-2xl font-semibold text-black capitalize dark:text-black lg:text-3xl">
                    Contact me for <br/> more info
                </h1>

                <div class="mt-6 space-y-8 md:mt-8">
                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span class="mx-2 text-black truncate w-72 dark:text-gray-400">
                          Bangladesh/Saver,Dhaka,
                        </span>
                    </p>

                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span class="mx-2 text-black truncate w-72 dark:text-gray-400">(880) 1724928794</span>
                    </p>

                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <span class="mx-2 text-black truncate w-72 dark:text-gray-400">prantochandrodas@gmail.com</span>
                    </p>
                </div>

                <div class="mt-6 w-80 md:mt-8">
                    <h3 class="text-black">Social media :</h3>

                    <div class="flex mt-4 -mx-1.5 ">
                        <a class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://www.facebook.com/pranto.chandrodas.33" target='_blank'>
                            <img src={facebook} className='w-10' alt="" />
                        </a>

                        <a class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://github.com/prantochandrodas" target='_blank'>
                            <img src={github} className='w-10 rounded-xl' alt="" />
                        </a>

                        <a class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://www.linkedin.com/in/pranto-das08/" target='_blank'>
                            <img src={linkdin} className='w-10' alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-8 lg:w-1/2 lg:mx-6">
                <div
                    class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    <h1 class="text-lg font-medium text-gray-700">What do you want to ask</h1>

                    <form class="mt-6" ref={form} onSubmit={sendEmail}>
                        <div class="flex-1">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input type="text" name='name' placeholder="Enter Your Name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input name='user_email' type="email" placeholder="Enter Your Email" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="w-full mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea name='message' class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            get in touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer></ToastContainer>
</section>
         
      
    );
};

export default Contact;