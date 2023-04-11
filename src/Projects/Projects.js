import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import project from "../../src/Assets/project1.png";
import project1 from '../../src/Assets/project2.png';
import project2 from '../../src/Assets/Capture.PNG';

const Projects = () => {
    return (
        <div id='Projects'>
            <h1 className='text-3xl text-center font-[500] underline  underline-offset-4'>Projects</h1>
            <div className='mt-4 flex w-[70%] mx-auto lg:shadow-2xl shadow-none p-10' align="center">
            <img src={project2} alt="Project" className='w-[300px] h-[300px]' />
                <div className='ml-4'>
                    <h1 className='lg:text-2xl text-md font-bold text-left'>GoShop (simple Ecommerce website )</h1>

                    <p className='lg:text-xl text-sm mt-2 text-left'>
                        <span className='font-semibold'>About this site</span> :- This is a Ecommerce type Project . Made with React.js,Express.js,MongoDB,Firebase, MaterialUI.The main Features are Login and Signup with firebase with user role (Buyer,Seller).Product Add , Delete and Place Order .Add Product in watch later page.
                    </p>
                    <p className='lg:text-xl text-sm mt-2 text-left'>
                       <span className='font-semibold'> Demo Account:</span>  <br />
                        Email:pranto@gmail.com <br />
                        Password:vuilagesi
                    </p>
                    
                    <div className='mt-5 flex' align="left">
                        <a href="https://goshopclient.web.app/" target={'_blank'}><button className='btn btn-info btn-sm'>See Live</button></a>
                        <a href="https://github.com/prantochandrodas/new-goshop" target={'_blank'}><button className="btn btn-outline btn-accent btn-sm">Source Code</button></a>
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