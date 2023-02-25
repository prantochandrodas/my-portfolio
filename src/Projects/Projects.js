import React from 'react';
import { Link } from 'react-router-dom';
import project from "../../src/Assets/project1.png";
import project1 from '../../src/Assets/project2.png';
import project2 from '../../src/Assets/project3.png';

const Projects = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold underline  underline-offset-4'>Projects</h1>
            <div className='grid lg:grid-cols-3 lg:w-[90%] w-[100%] mx-auto p-10 gap-10'>
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
                <div className="card card-compact w-66 bg-base-100 shadow-xl">
                    <figure><img src={project2} className="lg:h-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Learn Web</h2>
                        <p>Simpel html, css, Bootstrap based website.</p>
                        <div className="card-actions justify-end">
                            <a href="https://prantochandrodas.github.io/learn-web-project/"><button className="btn btn-primary">Live Site</button></a>
                            <Link to="/projectThree/details"><button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;