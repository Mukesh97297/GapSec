import React from 'react';
import Image from 'next/image';
import Services from './pages/services/page';
import Header from './pages/navbar/page';
import Footer from './pages/footer/page';

function Main() {
    return (
        <div>
            <Header/>
            <div className='flex justify-center bg-cover bg-no-repeat bg-center relative overflow-hidden  bg-hero-pattern min-h-[566px]'>
                <div className=' absolute bg-cover bg-center bg-hero-vector min-h-[892px] min-w-[2078px]' ></div>
                <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8 grid '>
                    <div className='grid grid-cols-12 md:text-start text-center md:py-0 py-20' >
                        <div className=' flex lg:col-span-7 col-span-12 lg:text-start items-center text-center md:min-w-[558px] md:min-h-[375px] md:top-[225px] md:left-[291px] mb-4'>
                            <div>
                            <h2 className=' font-bold text-sm tracking-[1px] uppercase text-[#E63232] py-4'>Security Services provider.</h2>
                            <h1 className=' font-bold lg:text-5xl text-3xl text-[#0D0D0D] lg:leading-[67px] leading-[40px] py-4 capitalize'>We identify Gaps, <span className='text-[#E63232]'> you gain Security</span></h1>
                            <p className=' font-normal lg:text-xl text-base leading-6 lg:leading-8 text-[#050202] opacity-[70%] py-4'>Identifying gaps is a crucial step in ensuring security in any <br className='md:block hidden' /> system or process. These gaps can range from technical <br className='md:block hidden' /> vulnerabilities to gaps in policies and procedures.</p>
                            <button className='md:w-[197px] w-full  bg-[#E63232] font-medium text-base leading-5 rounded-[5px] gap-2.5 h-[51px] text-[#FFFCFC] '>Company Profile</button>
                            </div>
                        </div>
                        <div className='lg:col-span-5 col-span-12 flex justify-center items-center sm:text-center  md:top-[246px] md:left-[922px] '>
                            <Image src="/images/Group 1000003129.png" height={303} width={583} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <Services/>
            <Footer/>
        </div>
    )
}

export default Main
