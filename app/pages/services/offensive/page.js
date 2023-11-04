import React from 'react'
import Image from 'next/image'
import Footer from '../../footer/page'
import Header from '../../navbar/page'
function Offensive() {
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
                                    <li>OFFENSIVE SECURITY</li>
                                </ul>
                            </div>
                            <div className=' py-2'>
                                <h1 className=' font-bold lg:text-5xl text-3xl leading-10 lg:leading-[67px] items-center '>Offensive Security </h1>
                            </div>
                            <div className=' py-2'>
                                <p className=' font-normal text-base leading-[25px] items-center text-[#050202]'>Resources to help you keep up to datewith industry insights, best practices and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8 justify-center '>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] '>Red Teaming</h1>
                            <p className=' font-normal text-base leading-6'>Strengthen your organisation{`'`}s defenses with our Red Teaming  services - our experts will simulate real-world attacks
                                to identify   vulnerabilities and provide actionable recommendations for   better security.
                            </p>
                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Background.png" height={305} width={239} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10'>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Group 1000003070.png" height={305} width={305} alt='' />
                    </div>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202]'>Purple Teaming</h1>
                            <p className=' font-normal text-base leading-6'>Unite your offense and defense with our Purple Teaming services - our  experts will collaborate with your team to simulate realistic attack  scenarios and provide insights to improve your security controls and  incident response capabilities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202]'>Cloud Securit</h1>
                            <p className=' font-normal text-base leading-6'> Secure your cloud environment with our Cloud Security service - we{`'`}ll
                                help you ensure industry-standard compliance and minimize the risks of  cyber threats, so you can focus on driving business value

                            </p>
                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/Images/Vector (4).png" height={305} width={304} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10'>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (5).png" height={305} width={294} alt='' />
                    </div>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202]'>Web & Mobile Application Testing</h1>
                            <p className=' font-normal text-base leading-6'>Ensure your applications are secure with our comprehensive web and  mobile
                                application testing services - our team will identify vulnerabilities  and provide detailed recommendations
                                to help you fix issues before they  can be exploited by attackers.

                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202]'>Network Testing: External & Internal</h1>
                            <p className=' font-normal text-base leading-6'> Get a complete view of your organization{`'`}s security posture with our
                                external and internal network testing services - our team will simulate
                                attacks from both outside and inside your network to identify
                                vulnerabilities and provide recommendations to strengthen your defenses  and protect your critical assets
                            </p>
                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (6).png" height={305} width={306} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10 '>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:order-first lg:py-0 py-5'>
                        <Image src="/Images/Group (3).png" height={305} width={305} alt='' />
                    </div>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex lg:order-last'>
                        <div >
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202]'>Wireless Testing</h1>
                            <p className=' font-normal text-base leading-6'>Don{`'`}t overlook wireless security - our wireless testing services will identify
                                vulnerabilities in your wireless networks and devices, including access
                                points and routers, and provide recommendations to help you secure your
                                wireless infrastructure and protect against unauthorized access.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202]'>Social Engineering: Phishing</h1>
                            <p className=' font-normal text-base leading-6'> Train your employees to recognize and resist social engineering attacks
                                with our phishing services - our simulated phishing campaigns will test
                                your organization{`'`}s susceptibility to phishing attacks and provide
                                customized training to help your employees become your first line of
                                defense against cybercrime
                            </p>
                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Group (4).png" height={305} width={382} alt='' />
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Offensive
