import React from 'react'
import Image from 'next/image'
import Header from '../../navbar/page'
import Footer from '../../footer/page'
function Managed() {
    return (
        <div>
            <Header/>
            <div className='flex justify-center bg-cover bg-no-repeat bg-center relative overflow-hidden  bg-hero-pattern md:min-h-[566px] min-h-full md:py-0 py-10'>
                <div className='md:-top-20 md:-left-11 absolute bg-cover bg-center bg-hero-vector md:min-h-[892px] min-h-full md:min-w-[2323px] min-w-full' ></div>
                <div className='grid grid-cols-12 justify-center'>
                    <div className='col-span-12 flex justify-center items-center text-center'>
                        <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8 justify-center '>
                            <div className='flex justify-center py-2'>
                                <ul className='md:flex block gap-2 text-red-600 font-normal text-base leading-6 '>
                                    <li>HOME</li>
                                    <li className='items-center justify-center flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </li>
                                    <li>SERVICES</li>
                                    <li className='items-center justify-center flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>

                                    </li>
                                    <li>MANAGED DEFENSIVE SECURITY</li>
                                </ul>
                            </div>
                            <div className=' py-2'>
                                <h1 className=' font-bold lg:text-5xl text-3xl leading-10 lg:leading-[67px] items-center '>Managed Defensive Security</h1>
                            </div>
                            <div className=' py-2'>
                                <p className=' font-normal text-base leading-[25px] items-center text-[#050202]'>Resources to help you keep up to datewith industry insights, <br className='md:block hidden' /> best practices and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8 justify-center '>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3 '>Managed Detection & Response</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Detect and respond to cyber threats in real-time with our Managed Detection and Response (MDR)
                                services - our team of experts will monitor your network 24/7, detect and investigate potential security incidents, and provide swift response and
                                remediation to minimize the impact of cyber attacks on your business.</p>

                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (8).png" height={305} width={379} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10'>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Group 1000003066.png" height={279} width={358} alt='' />
                    </div>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3'>Phishing</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Let us handle your phishing attacks so you can focus on your
                                business - with our Managed Phishing services, our team will monitor and respond to phishing attempts against your organization,
                            </p>
                            <p className=' font-normal text-base leading-6 mb-3'>providing rapid incident response to minimize the impact of successful attacks
                                and keep your business running smoothly
                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-boldlg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3 '>Threat Hunting</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>LStay one step ahead of cyber threats with our Threat Hunting service - our team of experts will
                                proactively search for and identify potential threats that may
                                have evaded traditional security measures, and provide customised recommendations to help you strengthen your defenses and prevent future attacks.
                            </p>

                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Group 1000003067.png" height={305} width={305} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10'>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (9).png" height={343} width={307} alt='' />
                    </div>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3'>Security Operations Platform</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Take control of your security operations with our Security Operations Platform - our
                                customisable platform includes tools such as the SIEM, threat intelligence, and incident response automation,
                            </p>
                            <p className=' font-normal text-base leading-6 mb-3'>Empowering your team to detect and respond to security incidents quickly and effectively,
                                while providing complete visibility and control over your organization{`'`}s security posture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         <Footer/>
        </div>
    )
}

export default Managed
