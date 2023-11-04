import Image from 'next/image'
import React from 'react'
import Header from '../navbar/page'
import Footer from '../footer/page'

function About() {
  return (
    <div>
      <Header/>
      <div className='flex justify-center bg-cover bg-no-repeat bg-center relative overflow-hidden  bg-hero-pattern md:min-h-[566px] md:py-0 py-10 min-h-full'>
        <div className='md:-top-20 md:-left-11 absolute bg-cover bg-center bg-hero-vector md:min-h-[892px] min-h-full  md:min-w-[2323px] min-w-full' ></div>
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
                  <li>SERVICES</li>
                  <li className='items-center flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                  </li>
                  <li>ABOUT</li>
                </ul>
              </div>
              <div className=' py-2'>
                <h1 className=' font-bold lg:text-5xl text-3xl lg:leading-[67px] leading-10 items-center '>About GapSec</h1>
              </div>
              <div className=' py-2'>
                <p className=' font-normal text-base leading-[25px] items-center text-[#050202]'>Resources to help Welcome to GapSec, a trusted cybersecurity consulting firm based <br className='md:block hidden' /> in East Africa.best practices and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-12 justify-center '>
          <div className='lg:col-span-9 col-span-12 lg:pl-36 px-0 md:text-start text-center'>
            <h1 className=' font-bold lg:leading-[39px] leading-7 md:text-[26px] text-xl mx-auto py-10 lg:pr-36 pr-0'>Welcome to GapSec, a trusted cybersecurity consulting firm based in East Africa.</h1>
            <p className=' font-normal lg:text-lg text-base leading-6 lg:leading-8'>Our mission is to protect businesses from the ever-evolving landscape of cyber threats. With our team of <span className='font-medium lg:text-lg text-base leading-6 lg:leading-8 text-[#E63232]'>experienced cybersecurity specialists</span>, we offer comprehensive solutions tailored to the unique needs of our  clients.</p>
          </div>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 flex justify-center'>
            <Image src="/images/Group 1000003154.png" alt="" width={1116} height={443} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-12 justify-center  '>
          <div className='col-span-12 lg:px-32 px-0 md:text-start text-center'>
            <p className='font-normal lg:text-lg text-base leading-6 lg:leading-8 py-10'>At GapSec.we understand the critical importance of safeguarding valuable data and digital assets. Our proactive approach includes conducting thorough cybersecurity assessments to identify vulnerabilities, providing managed security services to monitor and protect your systems in real-time, conducting rigorous penetration testing to uncover weaknesses, and offering compliance consulting to ensure adherence to industry standards.</p>
            <h1 className=' font-bold lg:leading-[39px] leading-7 md:text-[26px] text-xl mx-auto py-6 lg:pr-40 pr-0'>What sets us apart is our deep knowledge and expertise in global cybersecurity practices and technologies. </h1>
            <p className='font-normal lg:text-lg text-base leading-6 lg:leading-8 py-8'>Our team brings together diverse backgrounds from Australia, the UK, and Sweden, which enables us to deliver international perspectives and cutting-edge solutions to the local market. We continuously stay updated with the latest trends, emerging threats, and best practices in the industry to provide our clients with the highest level of protection.</p>
            <h1 className='font-bold lg:leading-[39px] leading-7 md :text-[26px] text-xl mx-auto py-6 lg:pr-40 pr-0'>Choose GapSec as your <br className='md:block hidden' /> Trusted cybersecurity partner.</h1>
            <p className='font-normal lg:text-lg text-base leading-6 lg:leading-8 py-8'>With our exceptional service, industry expertise, and dedication to your security, we will fortify your digital defences and enable you to focus on your core business. Contact us today to learn more about our services and how we can safeguard your valuable assets in this rapidly evolving cyber landscape.</p>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  )
}

export default About
