import React from 'react'
import Image from 'next/image'
import Header from '../../navbar/page'
import Footer from '../../footer/page'
function Blogoverview() {
  return (
    <div>
        <Header/>
    <div className='flex justify-center bg-cover bg-no-repeat bg-center relative overflow-hidden  bg-hero-pattern min-h-[566px]'>
        <div className='md:-top-20 md:-left-11 absolute bg-cover bg-center bg-hero-vector min-h-[892px] min-w-[2323px]' ></div>
        <div className='grid grid-cols-12 justify-center'>
            <div className='col-span-12 flex justify-center items-center'>
                <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8  '>
                    <div className='lg:justify-start justify-center flex  py-2'>
                        <ul className='flex gap-2 text-red-600 font-normal text-base leading-6 '>
                            <li>HOME</li>
                            <li className='items-center flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </li>
                            <li>BLOGS</li>
                            <li className='items-center flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </li>
                            <li>HOW TO TRACK ALL OF YOUR FOURTH</li>
                        </ul>
                    </div>
                    <div className=' py-2 flex lg:text-start text-center'>
                        <h1 className=' font-bold text-5xl leading-[67px]'>How to Track All of Your  <br className='md:block hidden' /> Fourth-Party Cybersecurity  <br className='md:block hidden' /> Risks</h1>
                    </div>
                    <div class="flex items-center lg:justify-start justify-center  ">
                        <Image className=" rounded-full border-[0.1px] mr-4" height={50} width={50} src="/images/Ellipse 1.png" alt="Avatar" />
                        <div className="text-sm">
                            <p className="text-[#0D0D0D] font-bold text-base leading-5">John Smith</p>
                            <p className="text-[#0D0D0D] font-normal text-base leading-5">updated Apr 25, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-12 justify-center'>
            <div className=' col-span-12 flex justify-center items-center'>
                <div className='py-20 pl-20'>
                    <p className=' font-normal text-base leading-6'>5G refers to the 5th generation of mobile phone wireless network capability. It has captured<br className='md:block hidden' /> attention and excitement because of its ability to connect people, objects, and devices more<br className='md:block hidden' /> frequently and seamlessly than ever, along with its higher network speeds, extremely low latency,<br className='md:block hidden' /> and more reliable network performance.</p>
                    <p className=' font-normal text-base leading-6 pt-10'>It is relatively early in its evolution, but forecasts predict there will be <span className='font-bold'>more than 3.5 billion 5G<br className='md:block hidden' /> connections worldwide by 2025.</span> Governments and businesses anticipate many changes to how<br className='md:block hidden' /> we live and do business. With this new iteration of mobile technology, 5G is expected to be in use<br className='md:block hidden' /> for at least another couple of decades until 6G technology is developed.</p>
                    <p className=' font-normal text-base leading-6 pt-10'>As a result, it{`'`}s important to consider the impact and new challenges that 5G will bring and have on<br className='md:block hidden' /> . Adopting new technology without cybersecurity considerations can significantly impact the safety<br className='md:block hidden' /> and security of governments, the public, and businesses at all levels. Each must share responsibility<br className='md:block hidden' /> for 5G cybersecurity awareness, taking steps to remediate vulnerabilities, and mitigating problems<br className='md:block hidden' /> associated with 5G technology.</p>
                    <div className='py-20'>
                        <h1 className='font-bold text-4xl leading-10 text-[#050202]'>The 5G Network vs. Previous Generations</h1>
                        <p className='pt-10'>To fully explore what 5G means for cybersecurity, it{`'`}s helpful to take a closer look at past mobile<br className='md:block hidden' /> technology and why the leap from 4G to 5G is unlike the difference between other cell phone<br className='md:block hidden' /> network generations.</p>
                        <div className='pl-5'>
                            <p className=' font-normal text-base leading-6 lg:pt-10 pl-0'> <span className='font-bold text-base leading-6'> First Generation (1G) -</span> From the 1980s, the network retrospectively dubbed 1G offered users<br className='md:block hidden' /> analog voice technology, working over a geographical area with low-power radio transmitters.</p>
                            <p className=' font-normal text-base leading-6 lg:pt-10 pl-0'> <span className='font-bold text-base leading-6'>Second Generation (2G) -</span> In the early 1990s, the second generation introduced digital<br className='md:block hidden' /> capability and SMS and MMS services. Phone conversations were encrypted between the<br className='md:block hidden' /> phone and the cellular base station, if not throughout the network. Digital technology allowed<br className='md:block hidden' /> cell phones to use radio frequencies more efficiently because more users could utilize each<br className='md:block hidden' /> frequency band. General Packet Radio Service (GPRS) offered speeds of up to 5 kB/s,<br className='md:block hidden' /> whereas adding Enhanced Data Rates for GSM Evolution (EDGE) improved speeds up to a<br className='md:block hidden' /> theoretical maximum of 48 kB/s.</p>
                            <p className=' font-normal text-base leading-6 lg:pt-10 pl-0'> <span className='font-bold text-base leading-6'>Third Generation (3G) -</span> Mid-2001 saw the introduction of mobile data, allowing video calls,<br className='md:block hidden' /> mobile TV, and fixed wireless Internet access. The average connection speed was 3 Mbps, 30<br className='md:block hidden' /> times faster than the average speed of 2G, while top speeds were in the region of 7 Mbps.<br className='md:block hidden' /> iPhone and Android technology were also pivotal in increasing the popularity of mobile<br className='md:block hidden' /> communication, with the introduction of the smartphone and the use of the term mobile<br className='md:block hidden' /> broadband for this wireless technology. 3G saw security improvements over previous<br className='md:block hidden' /> generations because user equipment could authenticate a network before connecting. This<br className='md:block hidden' /> generation of networks used an updated KASUMI block cipher to improve network<br className='md:block hidden' /> infrastructure security.</p>
                            <p className=' font-normal text-base leading-6 lg:pt-10 pl-0'> <span className='font-bold text-base leading-6'>Fourth Generation (4G) -</span> In the 2010s, consumers began accessing the 4G broadband<br className='md:block hidden' /> cellular network. Meeting specifications from the International Telecom Union (ITU), 4G<br className='md:block hidden' /> allowed users to access IP telephony, video conferencing, and gaming services. Maximum<br className='md:block hidden' /> speeds were 150 Mbit/s for downloads and 5 Mbit/s for uploading, vastly improving user<br className='md:block hidden' /> experiences. ITU included Long Term Evolution (LTE) in its 4G definition from 2010, enhancing<br className='md:block hidden' /> typical speeds via core network improvements and using a different radio interface.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-4xl leading-10 text-[#050202]'>The 5G Network</h1>
                        <p className=' font-normal text-base leading-6 pt-10 text-[#0D0D0D]'>5G represents enhanced mobile broadband, enabling more connectivity, including the <span className=' underline'>Internet of <br className='md:block hidden' /> Things</span> (IoT) and other potential services and deployments. Such services may include digitized<br className='md:block hidden' /> logistics, remote surgery (with latency as low as one millisecond), and more accurate agricultural<br className='md:block hidden' /> processes using drones.</p>
                        <p className=' font-normal text-base leading-6 pt-10 text-[#0D0D0D]'> The 5th generation of mobile network technology is also intended to be more reliable for users with<br className='md:block hidden' /> negligible latency (up to ten times less than 4G, typically around four milliseconds), offering a<br className='md:block hidden' /> better experience for individual consumers and businesses with download speeds up to 10 gigabits<br className='md:block hidden' /> per second, which is around 100 times faster than 4G.</p>
                        <p className=' font-normal text-base leading-6 pt-10 text-[#0D0D0D]'>The transition from 4G to 5G continues to be helped by the 3rd Generation Partnership Project<br className='md:block hidden' /> (3GPP). Formed in 1998, the 3GPP is a global initiative uniting seven telecommunications standard<br className='md:block hidden' /> development organizations. Together, they aim to maximize compatibility between 5G and legacy<br className='md:block hidden' /> infrastructure and equipment to smooth the transition to 5G and future networks, ensuring a<br className='md:block hidden' /> continuous, robust, widely-available, end-to-end ecosystem that is backward- and forward-<br className='md:block hidden' />compatible.</p>
                        <p className=' font-normal text-base leading-6 pt-10 text-[#0D0D0D]'>As an overhaul of traditional architecture, 5G can support services and emerging technologies that<br className='md:block hidden' /> would have been impossible with previous generations. This means that 5G will have a massive<br className='md:block hidden' /> impact on critical infrastructure. Compared with previous generations of cellular infrastructure, 5G<br className='md:block hidden' /> is not only a faster network. It vastly differs in terms of functionality, capability, accessibility, scope,<br className='md:block hidden' /> and potential.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default Blogoverview
