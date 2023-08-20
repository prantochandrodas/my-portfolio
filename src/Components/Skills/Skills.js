import React from 'react';
import html from '../../Assets/skills/Icon1.png'
import css from '../../Assets/skills/Icon2.png'
import bootstarp from '../../Assets/skills/Icon3.png'
import tailwindcss from '../../Assets/skills/Icon.4.png'
import express from '../../Assets/skills/Icon.8.png'
import rea from '../../Assets/skills/Icon.7.jpg'
import mongodb from '../../Assets/skills/Icon.9.png'
import redux from '../../Assets/skills/redux-logo-landscape.png'
import next from '../../Assets/skills/nextjs.png'

const Skills = () => {
    return (
        <div className='my-10'>
            <h1 className='lg:w-[80%] mx-auto my-4 font-semibold text-xl'>Skills</h1>
            <div className='lg:w-[80%] mx-auto grid lg:grid-cols-5 lg:gap-[30px]'>
                <div className='p-2 lg:w-[140px]  border border-2 inline-block rounded-xl mx-4'>
                    <img src={html} alt="html" className=' rounded-xl lg:w-[120px] lg:h-[100px]' />
                </div>
                <div className='p-2 lg:w-[140px] border border-2 inline-block rounded-xl mx-4'>
                    <img src={css} alt="html" className='lg:w-[120px] lg:h-[100px] rounded-xl' />
                </div>
                <div className='p-2 lg:w-[140px] border border-2 inline-block rounded-xl mx-4'>
                    <img src={bootstarp} alt="html" className='lg:w-[120px] lg:h-[100px] rounded-xl' />
                </div>
                <div className='p-2 lg:w-[140px] border border-2 inline-block rounded-xl mx-4'>
                    <img src={tailwindcss} alt="html" className='lg:w-[120px] lg:h-[100px] rounded-xl' />
                </div>
                <div className='p-2 lg:w-[140px] border border-2 inline-block rounded-xl mx-4'>
                    <img src={rea} alt="html" className='lg:w-[120px] lg:h-[100px] rounded-xl' />
                </div>
                <div className='p-2 lg:w-[140px] border border-2 inline-block rounded-xl mx-4'>
                    <img src={express} alt="html" className='lg:w-[120px] lg:h-[100px] rounded-xl' />
                </div>
                <div className='p-2 lg:w-[140px] border border-2 inline-block rounded-xl mx-4'>
                    <img src={mongodb} alt="html" className='lg:w-[120px] lg:h-[100px] rounded-xl' />
                </div>
                <div className='p-2 lg:w-[140px] border border-2 inline-block rounded-xl mx-4'>
                    <img src={redux} alt="html" className='lg:w-[120px] lg:h-[100px] rounded-xl' />
                </div>
                <div className='p-2 lg:w-[140px] border border-2 inline-block rounded-xl mx-4'>
                    <img src={next} alt="html" className='lg:w-[120px] lg:h-[100px] rounded-xl' />
                </div>
            </div>
        </div>
    );
};

export default Skills;