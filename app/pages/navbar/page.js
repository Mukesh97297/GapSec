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
                        <li className='flex'>
                            <Link href="/pages/services" className="hover:text-blue-500">
                            Services
                            </Link>
                            <button onClick={toggleDropdown}  className="hover:text-blue-500  mx-1 my-2 md:my-0 cursor-pointer flex items-center">
                            
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                            <div className={`absolute mt-6 ${isDropdownOpen ? 'block' : 'hidden'}`} ref={navbarRef}>
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



















