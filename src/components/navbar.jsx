import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar({sidebarOpen, setSidebarOpen}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative '>
      
      <div className='flex items-center justify-between p-2 bg-[#776B5D] max-h-14'>
        <div className='flex items-center'>
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="text-[#EBE3D5] size-7 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={handleSidebar}
              >
              <path 
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Z" 
              />
              <path 
                d="M3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z" 
              />
              <path 
                d="M3 17.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
              />
          </svg>
        </div>

        <div className="relative flex justify-center mx-4 ">
          <input
            className="items-center bg-[#EBE3D5] text-[#776B5D] rounded-full p-2 pl-10
              w-[400px] md:w-[600px] lg:w-[700px] transition-all duration-300 ease-in-out placeholder-[#776B5D]"
              placeholder="Search..."
          />
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-[#776B5D]"
          >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
          </svg>
        </div>
        
        <div className='flex items-center space-x-2'>
          
          <div className='hidden md:flex items-center space-x-4'>
            <Link to='/Articles'>
              <button className='font-bold text-sm text-[#EBE3D5] hover:text-[#B0A695] cursor-pointer'>Articles</button>
            </Link>
            
            <Link to='/Contact'>
              <button className='font-bold text-sm text-[#EBE3D5] hover:text-[#B0A695] cursor-pointer'>Contact</button>
            </Link>
          </div>
          
          <div className='flex items-center'>
            <SignedOut>
              <SignInButton className='text-[#EBE3D5] text-sm font-bold hover:bg-[#B0A695]/50
              rounded-full w-[70px] h-[30px]
              '/>        
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          
          <button 
            className='md:hidden flex items-center justify-center pr-4' 
            onClick={handleOnClick}
          > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="text-[#EBE3D5] size-7 transition-transform duration-300 ease-in-out "
            >
              <path 
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Z" 
                className={`transition-all duration-300 ease-in-out origin-center ${
                  isOpen ? 'rotate-45 translate-y-[5.25px]' : ''
                }`}
                style={{
                  transformOrigin: '12px 6.75px'
                }}
              />
              <path 
                d="M3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z" 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <path 
                d="M3 17.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                className={`transition-all duration-300 ease-in-out origin-center ${
                  isOpen ? '-rotate-45 -translate-y-[5.25px]' : ''
                }`}
                style={{
                  transformOrigin: '12px 17.25px'
                }}
              />
            </svg>
          </button>
        </div>
      </div>

      
      <div className={`absolute top-full right-2 w-40 bg-[#776B5D] shadow-lg z-50 rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-2">
          <Link to='/Articles' onClick={handleOnClick}>
            <button className='block w-full text-left font-bold text-sm text-[#EBE3D5]  cursor-pointer mb-2 p-2 rounded-full transition-colors hover:bg-[#B0A695]/60'>
              Articles
            </button>
          </Link>
          
          <Link to='/Contact' onClick={handleOnClick}>
            <button className='block w-full text-left font-bold text-sm text-[#EBE3D5] cursor-pointer p-2 rounded-full transition-colors hover:bg-[#B0A695]/60'>
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar