'use client'
import React from 'react'
import Image from 'next/image';
import { useState, useEffect,useRef } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navbarRef = useRef(null);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    // close navbar and dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false);
            setIsDropdownOpen(false);
          }
        };
    
        window.addEventListener('click', handleClickOutside);
    
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
      }, []);
    return (
        <nav className=" md:bg-transparent bg-red-200  w-full z-20 top-0 left-0 md:absolute relative py-2 " ref={navbarRef}>
            <div className="container max-w-1145 px-4 sm:px-6 lg:px-8 mx-auto  md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="" >
                            <Image src="/images/Group.png" alt="Your Company" width={151} height={45} />
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="md:hidden relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400  hover-text-white "
                        onClick={toggleNavbar}
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:flex-row md:space-x-8 md:mt-0">
                        <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                        <li>
                            <Link href="/pages/services">
                            <button onClick={toggleDropdown}  className="hover:text-blue-500  mx-2 my-2 md:my-0 cursor-pointer flex items-center">Services
                            
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                            </Link>
                            <div className={`md:absolute mt-2 ${isDropdownOpen ? 'block' : 'hidden'}`} ref={navbarRef}>
                                <ul className=" bg-red-300 border rounded-lg">
                                    <li>
                                        <Link href="/pages/services/defensive"
                                            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 capitalize">managed deffensive security
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/services/itsolution"
                                            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 capitalize">it solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/services/offensive" 
                                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100 capitalize">offensive security
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/services/managed" 
                                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100 capitalize">governance, risk & complience
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><Link href="/pages/about" className="hover:text-blue-500">About</Link></li>
                        <li><Link href="/pages/blog" className="hover:text-blue-500">Blog</Link></li>
                    </ul>
                </div>
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                  <Link href="/pages/contact">
                  <button type="button" className="text-[#E63232] rounded-sm border gap-2 border-[#E63232] border-solid w-32  h-11">Contact Us</button>
                  </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;



















//function Header() {
    //     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    //     const toggleDropdown = () => {
    //         setIsDropdownOpen(!isDropdownOpen);
    //     };
    
    //     const toggleMobileMenu = () => {
    //         setIsMobileMenuOpen(!isMobileMenuOpen);
    //     };
    //     useEffect(() => {
    //         const closeMenuOnLargerScreens = () => {
    //             if (window.innerWidth >= 768) {
    //                 setIsMobileMenuOpen(false);
    //             }
    //         };
    //         window.addEventListener('resize', closeMenuOnLargerScreens);
    
    //         return () => {
    //             window.removeEventListener('resize', closeMenuOnLargerScreens);
    //         };
    //     }, []);
    //     return (
    //         <div>
    //             <nav className=" bg-transparent  w-full z-20 top-0 left-0 absolute">
    //                 <div className="mx-auto max-w-1145 px-4 sm:px-6 lg:px-8">
    //                     <div className="flex py-2 items-center justify-between">
    
    //                         <Image
    //                             src="/images/Group.png"
    //                             alt="Your Company"
    //                             width={151} height={45}
    //                         />
    
    //                         <div className="hidden md:block">
    //                             <div className="ml-10 flex items-baseline space-x-4">
    //                                 <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent ">
    //                                     <li>
    //                                         <Link
    //                                             href="/"
    //                                             className="text-base font-normal leading-6 tracking-normal text-left text-gray-900"
    //                                             aria-current="page"
    //                                         >
    //                                             Home
    //                                         </Link>
    //                                     </li>
    //                                     <li aria-labelledby="dropdownNavbarLink">
    //                                         <button
    //                                             onClick={toggleDropdown}
    //                                             aria-expanded={isDropdownOpen}
    //                                             className="relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    //                                         >
    //                                             Service
    //                                             <svg className={`w-2.5 ml-2.5 pt-3 text-gray-900 transform ${isDropdownOpen ? 'rotate-0' : 'rotate-180'}`}
    //                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    //                                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    //                                             </svg>
    //                                         </button>
    //                                         <div
    //                                             id="dropdownNavbar"
    //                                             className={`absolute z-10 ${isDropdownOpen ? 'block' : 'hidden'}  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
    //                                         >
    //                                             <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
    //                                                 <li>
    //                                                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //                                                         Dashboard
    //                                                     </a>
    //                                                 </li>
    //                                                 <li>
    //                                                     <a href="#" className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //                                                         Settings
    //                                                     </a>
    //                                                 </li>
    //                                                 <li>
    //                                                     <a href="#" className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //                                                         Earnings
    //                                                     </a>
    //                                                 </li>
    //                                             </ul>
    //                                         </div>
    //                                     </li>
    //                                     <li>
    //                                         <Link
    //                                             href="/pages/about"
    //                                             className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
    //                                         >
    //                                             About
    //                                         </Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link
    //                                             href="/pages/blog"
    //                                             className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
    //                                         >
    //                                             Blog
    //                                         </Link>
    //                                     </li>
    //                                 </ul>
    
    //                             </div>
    
    //                         </div>
    //                         <div className="hidden md:block">
    //                             <button type="button" className="text-[#E63232] rounded-sm border gap-2 border-[#E63232] border-solid w-32  h-11">Contact Us</button>
    //                         </div>
    
    //                         <div className="-mr-2 flex md:hidden">
    //                             <button
    //                                 type="button"
    //                                 className="relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400  hover-text-white "
    //                                 aria-controls="mobile-menu"
    //                                 aria-expanded={isMobileMenuOpen}
    //                                 onClick={toggleMobileMenu}
    //                             >
    //                                 <span className="absolute -inset-0.5"></span>
    //                                 <span className="sr-only">Open main menu</span>
    //                                 {isMobileMenuOpen ? (
    //                                     <svg
    //                                         className="h-6 w-6"
    //                                         fill="none"
    //                                         viewBox="0 0 24 24"
    //                                         strokeWidth="1.5"
    //                                         stroke="currentColor"
    //                                         aria-hidden="true"
    //                                     >
    //                                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //                                     </svg>
    //                                 ) : (
    //                                     <svg
    //                                         className="block h-6 w-6"
    //                                         fill="none"
    //                                         viewBox="0 0 24 24"
    //                                         strokeWidth="1.5"
    //                                         stroke="currentColor"
    //                                         aria-hidden="true"
    //                                     >
    //                                         <path
    //                                             strokeLinecap="round"
    //                                             strokeLinejoin="round"
    //                                             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //                                         />
    //                                     </svg>
    //                                 )}
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
    //                     <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
    //                         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:flex-row md:space-x-8 md:mt-0  lg:bg-transparent sm:bg-red-200">
    //                             <li>
    //                                 <Link
    //                                     href="/"
    //                                     className="text-base font-normal leading-6 tracking-normal text-left text-gray-900"
    //                                     aria-current="page"
    //                                 >
    //                                     Home
    //                                 </Link>
    //                             </li>
    //                             <li aria-labelledby="dropdownNavbarLink">
    //                                 <Link href="/services" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Service <svg className="w-2.5  ml-2.5 pt-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    //                                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    //                                 </svg></Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     href="/pages/about"
    //                                     className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
    //                                 >
    //                                     About
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     href=".pages/blog"
    //                                     className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
    //                                 >
    //                                     Blog
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <button type="button" className="text-[#E63232] rounded-sm border gap-2 border-[#E63232] border-solid w-32  h-11">Contact Us</button>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    
    //             </nav>
    //         </div>
    //     )
    // }
    
    // export default Header