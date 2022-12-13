import React from 'react';

const Contact = () => {
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center mb-10 underline  underline-offset-4'>Contact Me</h1>
            <div className='lg:w-[60%] mx-auto border border-gray-600 p-6 w-[90%] bg-gray-600 '>
                <form action="https://formsubmit.co/prantochandrodas@gmail.com" method="POST">
                    <div className=''>
                        <div className='lg:flex my-5'>
                            <div className='mr-3 mt-2'>
                                <label htmlFor="name" className='mr-2 text-xl font-bold text-white'>Name :</label>
                                <input type="text" className='border border-gray-500 px-7 py-2 rounded-full' placeholder='Enter Your name' />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="name" className='mr-2 text-xl font-bold text-white'>Email :</label>
                                <input type="email" className='border border-gray-500 px-7 py-2 rounded-full' placeholder='Enter Your email' />
                            </div>
                        </div>

                       
                        <div className="">
                            <label htmlFor="name" className='mr-2 text-xl font-bold text-white'>Message :</label>
                            <textarea name="" id="" cols="40" rows="4" className='border border-gray-500 rounded mr-2' placeholder='Enter message'></textarea>
                        </div>
                        <input type="button" className='btn btn-outline mt-3 text-white' value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;