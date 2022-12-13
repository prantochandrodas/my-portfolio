import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon1 from '../../Assets/Icon1.png';
import icon2 from '../../Assets/Icon2.png';
import icon3 from '../../Assets/Icon3.png';
import icon4 from '../../Assets/Icon.4.png';
import icon5 from '../../Assets/Icon.5.jpg';
import icon6 from '../../Assets/Icon.7.jpg';
import icon7 from '../../Assets/Icon.8.png';
import icon8 from '../../Assets/Icon.9.png';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <div className='my-20 w-[90%] mx-auto p-10 shadow'>
            <h1 className='text-4xl font-bold'>Skills</h1>
            <p className='text-xl text-center font-bold mt-10 underline  underline-offset-4'>Core Skills</p>
            <div className=' lg:flex my-10 justify-center'>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary " style={{ "--value": 90 }}>90%</div>
                    </div>
                    <p className='text-xl text-center'>Html</p>
                </div>
                <div className='mx-4 '>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary" style={{ "--value": 80 }}>80%</div>
                    </div>
                    <p className='text-xl text-center'>Css</p>
                </div>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary" style={{ "--value": 75 }}>75%</div>
                    </div>
                    <p className='text-xl text-center'>Bootstrap</p>
                </div>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary" style={{ "--value": 70 }}>70%</div>
                    </div>
                    <p className='text-xl text-center'>Tailwind</p>
                </div>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary" style={{ "--value": 70 }}>70%</div>
                    </div>
                    <p className='text-xl text-center'>Javascript</p>
                </div>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary" style={{ "--value": 80 }}>80%</div>
                    </div>
                    <p className='text-xl text-center'>ReactJs</p>
                </div>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary" style={{ "--value": 70 }}>70%</div>
                    </div>
                    <p className='text-xl text-center'>ExpressJs</p>
                </div>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary" style={{ "--value": 60 }}>60%</div>
                    </div>
                    <p className='text-xl text-center'>MongoDB</p>
                </div>


            </div>

            <p className="text-xl text-center font-bold mt-10 underline  underline-offset-4">With familiar</p>
            <div className=' lg:flex my-10 justify-center'>
               
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary " style={{ "--value": 50 }}>50%</div>
                    </div>
                    <p className='text-xl text-center'>Php</p>
                </div>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary " style={{ "--value": 50 }}>50%</div>
                    </div>
                    <p className='text-xl text-center'>Laravel</p>
                </div>
                <div className='mx-4'>
                    <div className='flex justify-center my-2'>
                        <div className="radial-progress text-primary " style={{ "--value": 50 }}>50%</div>
                    </div>
                    <p className='text-xl text-center'>MySQL</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;