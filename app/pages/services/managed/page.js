import React from 'react'
import Image from 'next/image'
import Header from '../../navbar/page'
import Footer from '../../footer/page'
function Goverrnance() {
    return (
        <div>
            <Header />
            <div className='flex justify-center bg-cover bg-no-repeat bg-center relative overflow-hidden  bg-hero-pattern md:min-h-[566px] md:py-0 py-10'>
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
                                <h1 className=' font-bold lg:text-5xl text-3xl leading-10 lg:leading-[67px] items-center '>Governance, Risk & Complience</h1>
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
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3 '>Cyber Security Controls Assessment</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Ensure your cyber security controls are up to the task with our Cyber Security Controls Assessment service - our experts will conduct a thorough assessment of your existing security controls, </p>
                            <p className=' font-normal text-base leading-6 mb-3'>Identify gaps and weaknesses, and provide detailed recommendations to help you improve your security posture and protect your critical assets from cyber threats.</p>
                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (10).png" height={305} width={379} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10'>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (11).png" height={279} width={358} alt='' />
                    </div>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3'>Governance & Compliance Assessments</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Stay compliant and secure with our Governance & Compliance Assessments service - our team will assess your organization{`'`}s compliance with industry and regulatory standards, </p>
                            <p className=' font-normal text-base leading-6 mb-3'>Identify gaps and areas of improvement, and provide customized recommendations to help you achieve and maintain compliance while improving your overall security posture. </p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3 '>Incident Management</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Be prepared for any security incident with our Incident Management service - our team will help you develop and implement a comprehensive incident response plan tailored to your organization{`'`}s needs, providing rapid response and remediation to minimize the impact of security incidents and help you get back to business as usual quickly and securely.</p>
                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Group 1000003113.png" height={305} width={305} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-12 py-10'>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (12).png" height={343} width={307} alt='' />
                    </div>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3'>Policy & Procedure Development</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Develop a strong foundation for your organization{`'`}s security with our Policy and Procedure Development service - our team will work with you to create customized security policies and procedures tailored to your business needs and regulatory requirements, ensuring you have a clear and effective framework in place to protect your critical assets from cyber threats.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-12 py-10 flex flex-col-reverse'>
                    <div className='lg:col-span-5 col-span-12 items-center lg:text-start text-center lg:justify-start justify-center flex'>
                        <div>
                            <h1 className=' font-bold lg:text-[42px] text-3xl leading-10 lg:leading-[58px] text-[#050202] mb-3 '>Training and Awareness</h1>
                            <p className=' font-normal text-base leading-6 mb-3'>Empower your employees to be your first line of defense against cyber threats with our Training and Awareness service - our team will provide customised training and awareness programs to help your employees recognize and respond to security risks, reducing the likelihood of successful attacks and strengthening your overall security posture.</p>
                        </div>
                    </div>
                    <div className='lg:col-span-7 col-span-12 flex justify-center lg:py-0 py-5'>
                        <Image src="/images/Vector (13).png" height={305} width={305} alt='' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Goverrnance
