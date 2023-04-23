import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import project1 from "../../src/Assets/projects/project1.png";
import project2 from '../../src/Assets/projects/project2.png';
import project3 from '../../src/Assets/projects/project3.png';
// import project from '../../src/Assets/project1/Capture.PNG';
import './Projects.css'
const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-xl font-semibold'>Projects</h1>
            <div id='Projects' className='grid grid-col-1  lg:grid-cols-3 lg:w-[90%] w-[100%] mx-auto p-10 gap-10'>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div  style={{ backgroundImage: `url(${project1})`}} className="w-full bg-top hover:bg-bottom h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md firstprojectanimation"></div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">perfect-deal</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">LiveSite</span>
                        <a href="https://perfect-deal-3083b.web.app/" target='_blank'><button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">View</button></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div style={{ backgroundImage: `url(${project2})`}} className="w-full bg-top hover:bg-bottom h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md firstprojectanimation"></div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">excellent-photography</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">LiveSite</span>
                        <a href="https://excellent-photography-client.web.app/" target='_blank'><button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">View</button></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div style={{ backgroundImage: `url(${project3})`}} className="w-full bg-top hover:bg-bottom h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md firstprojectanimation"></div>
                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">GoShop</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">LiveSite</span>
                        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">View</button>
                    </div>
                </div>
            </div>
        </div>
            {/* <div className='grid lg:grid-cols-3 lg:w-[90%] w-[100%] mx-auto p-10 gap-10'>
                <div className="card card-compact w-66 bg-base-100 shadow-xl">
                    <figure><img src={project2} className="lg:h-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">GoShop</h2>
                        <p>simple Ecommerce website</p>
                        <div className="card-actions justify-end">
                            <a href="https://goshopclient.web.app/"><button className="btn btn-primary">Live Site</button></a>
                            <Link to="/projectThree/details"><button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-66 bg-base-100 shadow-xl">
                    <figure><img src={project} className="lg:h-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">excellent-photography</h2>
                        <p>Demo Service provider website.That is made width React, express.js, MongoDB.</p>
                        <div className="card-actions justify-end">
                           <a href="https://excellent-photography-client.web.app/"><button className="btn btn-primary">Live Site</button></a>
                           <Link to="/projectOne/details"><button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-66 bg-base-100 shadow-xl">
                    <figure><img src={project1} className="lg:h-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">perfect-deal</h2>
                        <p>Resale Ecommerce website made with React ,Express.js, MongoDB</p>
                        <div className="card-actions justify-end">
                           <a href="https://perfect-deal-3083b.web.app/"><button className="btn btn-primary">Live Site</button></a>
                           <Link to="/projectTwo/details"><button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Projects;