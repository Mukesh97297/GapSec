'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Header from '../navbar/page';
import Footer from '../footer/page';
function Contact() {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div>
            <Header/>
            <div className='flex justify-center bg-cover bg-no-repeat bg-center relative overflow-hidden  bg-hero-pattern md:min-h-[566px] min-h-full md:py-0 py-10'>
                <div className='md:-top-20 md:-left-11 absolute bg-cover bg-center bg-hero-vector md:min-h-[892px] min-h-full md:min-w-[2323px] min-w-full' ></div>
                <div className='grid grid-cols-12 justify-center'>
                    <div className='col-span-12 flex justify-center items-center text-center'>
                        <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8  '>
                            <div className='flex justify-center py-2'>
                                <ul className='flex gap-2 text-red-600 font-normal text-base leading-6 '>
                                    <li>HOME</li>
                                    <li className='items-center flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </li>
                                    <li>CONTACT</li>

                                </ul>
                            </div>
                            <div className=' py-2'>
                                <h1 className=' font-bold lg:text-5xl text-3xl lg:leading-[67px] leading-10 items-center '>Get in touch</h1>
                            </div>
                            <div className=' py-2'>
                                <p className=' font-normal text-base leading-[25px] items-center text-[#050202]'>Resources to help you keep up to datewith industry insights, <br className='lg:block hidden' /> best practices and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <form action="" className='mx-auto mt-16 max-w-xl sm:mt-20  px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                    <div>
                        <label htmlFor="first-name" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>First name *</label>
                        <div className='mt-2'>
                            <input type="text" placeholder='First name' className='w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%] shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white placeholder-[#050202] ' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Last name *</label>
                        <div className='mt-2'>
                            <input type="text" placeholder='Last name' className='placeholder-[#050202] w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%] shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                        </div>
                    </div>
                    <div className=' sm:col-span-2'>
                        <label htmlFor="email" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Email *</label>
                        <div className='mt-2'>
                            <input type="text" placeholder='you@company.com' className='placeholder-[#050202] w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%] shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                        </div>
                    </div>
                    <div className=' sm:col-span-2'>
                        <label htmlFor="country" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Country</label>
                        <div className=' relative mt-2'>
                            <div className=' absolute right-3 items-center '>
                                <select name="country" id="country" className='h-full bg-transparent py-5 text-[#050202]' />
                            </div>
                        </div>
                        <input type="text" placeholder='Select Your Country' className='placeholder-[#050202] w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                       shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                    </div>
                    <div>
                        <label htmlFor="Industry" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Industry *</label>
                        <div className=' relative mt-2'>
                            <div className=' absolute right-3 items-center '>
                                <select name="Industry" id="Industry" className='h-full bg-transparent py-5 text-[#050202]' />
                            </div>
                        </div>
                        <input type="text" placeholder='Industry' className='placeholder-[#050202] w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                       shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                    </div>
                    <div>
                        <label htmlFor="Inquiry" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Inquiry Type *</label>
                        <div className=' relative mt-2'>
                            <div className=' absolute right-3 items-center '>
                                <select name="Inquiry" id="Inquiry Type *" className='h-full bg-transparent py-5 text-[#050202]' />
                            </div>
                        </div>
                        <input type="text" placeholder='Inquiry' className='placeholder-[#050202] w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                       shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                    </div>
                    <div className=' sm:col-span-2'>
                        <label htmlFor="message" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Where did you hear about GapSec? *</label>
                        <div className='mt-2'>
                            <textarea name="message" placeholder='Enter your message...' id="message" rows="4" className='placeholder-[#050202] w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                       shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white'/>
                        </div>
                    </div>
                    <div className='sm:col-span-2'>
                        <label className="inline-flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="placeholder-[#050202] form-checkbox h-5 w-5 rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                          shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white"
                                checked={isChecked}
                                onChange={toggleCheckbox}
                            />
                            <span className=" font-normal text-base leading-6 text-[#0D0D0D]">You agree to our friendly <Link href="/" className=' underline'>privacy policy.</Link></span>
                        </label>
                    </div>
                    <div className=' sm:col-span-2'>
                        <button className=' w-full shadow-md bg-red-600 font-medium text-base leading-6 py-4 rounded-lg gap-2 text-white'>Send message</button>
                    </div>
                </div>
            </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact


