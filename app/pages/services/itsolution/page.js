import React from 'react'
import Image from 'next/image'
import Footer from '../../footer/page'
import Header from '../../navbar/page'
function ItSolution() {
    return (
        <div>
            <Header/>
            <div className='flex justify-center bg-cover bg-no-repeat bg-center relative overflow-hidden  bg-hero-pattern md:min-h-[566px] min-b-full md:py-0 py-10'>
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
                                    <li>IT SOLUTIONS</li>
                                </ul>
                            </div>
                            <div className=' py-2'>
                                <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[67px] items-center '>IT Solutions</h1>
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
                    <div className='lg:col-span-6 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3 '>Infrastructure</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Unlock the full potential of your IT infrastructure with our comprehensive solutions.
                                Whether you{`'`}re looking to leverage the cloud, implement on-premises infrastructure,
                                adopt container-based solutions, or migrate your systems seamlessly, our experts have got you covered.
                            </p>
                            <p className=' font-normal text-base leading-6 mb-3'>From strategic planning to efficient implementation, we ensure a robust and scalable infrastructure
                                that aligns with your business objectives.
                                Experience seamless integration, enhanced performance, and future-ready solutions with our Infrastructure Services. </p>
                        </div>
                    </div>
                    <div className='lg:col-span-6 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (7).png" height={305} width={275} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10'>
                    <div className='lg:col-span-6 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Group 1000003138.png" height={305} width={287} alt='' />
                    </div>
                    <div className='lg:col-span-6 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3'>Endpoint Device Procurement & Support</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Simplify the management of your diverse endpoint ecosystem with our comprehensive service.
                                We specialise in procuring and supporting a wide range of endpoints, including desktop computers, laptops, tablets, mobile devices, and more.
                            </p>
                            <p className=' font-normal text-base leading-6 mb-3'>Our experts ensure seamless deployment, ongoing maintenance, and efficient support for all
                                your endpoints. Experience hassle-free endpoint management and enhanced productivity with our Endpoint Device Procurement & Support service.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-6 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3'>Databases</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Unleash the power of your data with our expert database design and tuning solutions.
                                From designing efficient database structures to fine-tuning performance, our services optimise your database infrastructure for enhanced
                                productivity and scalability.  </p>
                            <p className=' font-normal text-base leading-6 mb-3'>Experience seamless data management and unlock valuable insights with our comprehensive database services.</p>
                        </div>
                    </div>
                    <div className='lg:col-span-6 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Group (5).png" height={305} width={305} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10'>
                    <div className='lg:col-span-6 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Group (6).png" height={305} width={305} alt='' />
                    </div>
                    <div className='lg:col-span-6 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3'>Backup & Recovery</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Safeguard your critical data with our reliable and efficient solution. We offer
                                comprehensive backup and recovery services to protect
                                your valuable information from data loss and ensure business continuity. </p>
                            <p className=' font-normal text-base leading-6 mb-3'>Our experts design tailored backup strategies, implement robust backup systems, and provide seamless
                                data recovery options.
                                Trust us to keep your data secure and accessible with our Backup & Recovery Service.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ItSolution
