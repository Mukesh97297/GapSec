import Image from 'next/image'
import React from 'react'
import Link  from 'next/link';
import Header from '../navbar/page';
import Footer from '../footer/page';

function Blog() {
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
                                    <li>BLOGS</li>
                                </ul>
                            </div>
                            <div className=' py-2'>
                                <h1 className=' font-bold lg:text-5xl text-3xl lg:leading-[67px] leading-10 items-center '>Cybersecurity & Risk <br className='lg:block hidden' /> Management Blog</h1>
                            </div>
                            <div className=' py-2'>
                                <p className=' font-normal text-base leading-[25px] items-center text-[#050202]'>Resources to help you keep up to datewith industry insights, <br className='lg:block hidden' /> best practices and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8'>
                <div className='py-10 lg:text-start text-center'>
                    <h1 className=' text-3xl font-bold leading-[45px]'>Featured News</h1>
                </div>
                <div className='grid grid-cols-12 py-8 gap-5'>
                    <div className='col-span-12 lg:col-span-5 justify-center lg:justify-start  flex '>
                        <Image src="/images/Rectangle 2026.png" height={341} width={500} alt='' />
                    </div>
                    <div className='lg:col-span-7 col-span-12 lg:text-start text-center'>

                        <button className=' rounded-[40px] gap-2 text-white font-medium text-sm leading-5 w-40  h-8 bg-[#E63232]'>CYBER SECURITY</button>
                        <div className='py-5'>
                            <p className=' text-sm font-medium leading-6 text-[#0D0D0D] opacity-[60%] uppercase'>january 21, 2023</p>
                            <h1 className=' text-3xl font-bold leading-[45px] text-[#050202]'>How to Track All of Your Fourth-Party Cybersecurity Risks</h1>
                            <p className=' text-base font-normal leading-6 text-[#0D0D0D]'>Learn how to easily track your fourth-party security risks to support your fourth-party risk management efforts.</p>
                        </div>
                        <a href="/" className="text-[#E63232] text-base font-semibold leading-[25px] underline mb-2">Read More</a>

                    </div>
                </div>
                <div className='py-8 lg:text-start text-center'>
                    <h1 className='font-bold text-3xl leading-[45px] text-[#050202]'>Recent News</h1>
                </div>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12 lg:col-span-4 pb-5 lg:text-start text-center'>
                        <div className='flex lg:justify-start justify-center'>
                            <Image alt='' src="/images/Rectangle 2020.png" width={360} height={210} className=' rounded-md' />
                        </div>
                        <div>
                            <p className=' text-sm font-medium leading-6 text-[#0D0D0D] opacity-[60%] uppercase py-5'>january 21, 2023</p>
                            <h1 className=' text-2xl font-bold leading-[45px] text-[#050202]'>How to Detect Internet-Facing Assets for Cybersecurity</h1>
                            <p className=' text-sm font-normal leading-6 text-[#0D0D0D] py-5'>Many people shy away from going to the lawyer. Legal tech companies like Helpcheck still help them get their rights.</p>
                        </div>
                        <a href="/" className="text-[#E63232] text-base font-semibold leading-[25px] underline">Read More</a>

                    </div>
                    <div className='col-span-12 lg:col-span-4 pb-5 lg:text-start text-center'>
                        <div className='flex lg:justify-start justify-center'>
                            <Image alt='' src="/images/Rectangle 2021.png" width={360} height={210} className=' rounded-md' />
                        </div>
                        <div>
                            <p className=' text-sm font-medium leading-6 text-[#0D0D0D] opacity-[60%] uppercase py-5'>january 21, 2023</p>
                            <h1 className=' text-2xl font-bold leading-[45px] text-[#050202]'>How to Detect Internet-Facing Assets for Cybersecurity</h1>
                            <p className=' text-sm font-normal leading-6 text-[#0D0D0D] py-5'>Many people shy away from going to the lawyer. Legal tech companies like Helpcheck still help them get their rights.</p>
                        </div>
                        <Link href="/" className="text-[#E63232] text-base font-semibold leading-[25px] underline mb-2">Read More</Link>
                    </div>
                    <div className='col-span-12 lg:col-span-4 pb-5 lg:text-start text-center'>
                        <div className='flex lg:justify-start justify-center'>
                            <Image alt='' src="/images/Rectangle 2022.png" width={360} height={210} className=' rounded-md' />
                        </div>
                        <div>
                            <p className=' text-sm font-medium leading-6 text-[#0D0D0D] opacity-[60%] uppercase py-5'>january 21, 2023</p>
                            <h1 className=' text-2xl text font-bold leading-[45px] text-[#050202]'>How to Detect Internet-Facing Assets for Cybersecurity</h1>
                            <p className=' text-sm font-normal leading-6 text-[#0D0D0D] py-5'>Many people shy away from going to the lawyer. Legal tech companies like Helpcheck still help them get their rights.</p>
                        </div>
                        <Link href="/" className="text-[#E63232] text-base font-semibold leading-[25px] underline">Read More</Link>
                    </div>
                    <div className='col-span-12 lg:col-span-4 pb-5 lg:text-start text-center'>
                        <div className='flex lg:justify-start justify-center'>
                            <Image alt='' src="/images/Rectangle 2025.png" width={360} height={210} className=' rounded-md' />
                        </div>
                        <div>
                            <p className=' text-sm font-medium leading-6 text-[#0D0D0D] opacity-[60%] uppercase py-5'>january 21, 2023</p>
                            <h1 className=' text-2xl text font-bold leading-[45px] text-[#050202]'>How to Detect Internet-Facing Assets for Cybersecurity</h1>
                            <p className=' text-sm font-normal leading-6 text-[#0D0D0D] py-5'>Many people shy away from going to the lawyer. Legal tech companies like Helpcheck still help them get their rights.</p>
                        </div>
                        <Link href="/" className="text-[#E63232] text-base font-semibold leading-[25px] underline">Read More</Link>
                    </div>
                    <div className='col-span-12 lg:col-span-4 pb-5 lg:text-start text-center'>
                        <div className='flex lg:justify-start  justify-center'>
                            <Image alt='' src="/images/Rectangle 2024.png" width={360} height={210} className=' rounded-md' />
                        </div>
                        <div>
                            <p className=' text-sm font-medium leading-6 text-[#0D0D0D] opacity-[60%] uppercase py-5'>january 21, 2023</p>
                            <h1 className=' text-2xl text font-bold leading-[45px] text-[#050202]'>How to Detect Internet-Facing Assets for Cybersecurity</h1>
                            <p className=' text-sm font-normal leading-6 text-[#0D0D0D] py-5'>Many people shy away from going to the lawyer. Legal tech companies like Helpcheck still help them get their rights.</p>
                        </div>
                        <Link href="/" className="text-[#E63232] text-base font-semibold leading-[25px] underline">Read More</Link>
                    </div>
                    <div className='col-span-12 lg:col-span-4 pb-5 lg:text-start text-center'>
                        <div className='flex lg:justify-start justify-center '>
                            <Image alt='' src="/images/Rectangle 2023.png" width={360} height={210} className=' rounded-md' />
                        </div>
                        <div>
                            <p className=' text-sm font-medium leading-6 text-[#0D0D0D] opacity-[60%] uppercase py-5'>january 21, 2023</p>
                            <h1 className=' text-2xl text font-bold leading-[45px] text-[#050202]'>How to Detect Internet-Facing Assets for Cybersecurity</h1>
                            <p className=' text-sm font-normal leading-6 text-[#0D0D0D] py-5'>Many people shy away from going to the lawyer. Legal tech companies like Helpcheck still help them get their rights.</p>
                        </div>
                        <Link href="/" className="text-[#E63232] text-base font-semibold leading-[25px] underline">Read More</Link>
                    </div>
                </div>
                <div className='flex justify-center pt-10 pb-20'>
                    <button className=' w-44 h-14 rounded-lg gap-[10px] text-[#FFFCFC] font-medium text-base leading-[25px] bg-[#E63232]'>Load More</button>
                </div>
            </div>
           <Footer/>
        </div>
    )
}

export default Blog
