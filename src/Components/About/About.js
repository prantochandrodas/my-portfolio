import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fa4, faEnvelope, faLocationDot, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import resume from '../../resume/Pranto Das Front End Developer Resume (3).pdf'

import myPhoto from "../../Assets/pranto.jpg";
import { Typewriter } from 'react-simple-typewriter';
const About = () => {
  return (
    
    <section class="text-gray-600 body-font w-[90%] mx-auto lg:my-10">
       <h1 className='text-center text-xl text-black font-semibold'>About Me</h1>
      <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">I am Pranto Das
            <br class="hidden lg:inline-block" /><Typewriter
              words={['Front-End Developer', 'React-Developer', 'MERN-Stack Developer']}
              loop={2000}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p class="mb-8 leading-relaxed text-black">I am a passionate Front End Web  developer. I am a professional at creating websites with  React, Express.js and MongoDB. I am a  dedicated web developer. I have a goal to establish my career as a Front End Web Developer . I am very much  interested  in learning a new language of development .</p>
          {/* <a href={resume} variant="contained" download> <button className="btn btn-primary mt-5">Resume</button></a> */}
          <div class="flex justify-center">
          <a href={resume} variant="contained" download> <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Resume</button></a>
           
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded lg:w-[400px] lg:h-[520px]" alt="hero" src={myPhoto}  />
        </div>
      </div>
    </section>
  );
};

export default About;