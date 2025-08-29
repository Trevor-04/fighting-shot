import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import LavenderRibbon from "../assets/Lavender.gif";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="relative">
      <div className="flex items-center justify-between p-2 bg-primary border-b border-b-accent-50 max-h-14 w-full">
        
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-accent size-7 md:hidden flex transition-transform duration-300 ease-in-out cursor-pointer"
            onClick={handleSidebar}
          >
            <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Z" />
            <path d="M3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z" />
            <path d="M3 17.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
          </svg>

          <Link to="/">
            <img
              src={LavenderRibbon}
              alt="ribbon"
              className="hidden md:flex max-h-10 cursor-pointer"
            />
          </Link>
        </div>

        <div className="relative mx-4 flex-1">
          <input
            className="bg-secondary text-accent rounded-full p-2 pl-10
              w-full max-w-[700px] transition-all duration-300 ease-in-out placeholder-accent"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-accent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/Articles">
              <button className="font-bold text-sm text-accent hover:text-accent-50 cursor-pointer">
                Articles
              </button>
            </Link>
            <a href="mailto:trevortopolski@icloud.com">
              <button className="font-bold text-sm text-accent hover:text-accent-50 cursor-pointer">
                Contact
              </button>
            </a>
          </div>

          <div className="flex items-center">
            <SignedOut>
              <SignInButton
                className="text-accent text-sm font-bold hover:text-accent-50
                rounded-full w-[70px] h-[30px]"
              />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          <button
            className="md:hidden flex items-center justify-center pr-4"
            onClick={handleOnClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-accent size-7 transition-transform duration-300 ease-in-out"
            >
              <path
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Z"
                className={`transition-all duration-300 ease-in-out origin-center ${
                  isOpen ? 'rotate-45 translate-y-[5.25px]' : ''
                }`}
                style={{
                  transformOrigin: '12px 6.75px',
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
                  transformOrigin: '12px 17.25px',
                }}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full right-2 w-40 bg-primary shadow-lg z-50 rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-2">
          <Link to="/Articles" onClick={handleOnClick}>
            <button className="block w-full text-left font-bold text-sm text-accent  cursor-pointer mb-2 p-2 rounded-full transition-colors hover:bg-secondary">
              Articles
            </button>
          </Link>
          <Link to="/" onClick={handleOnClick}>
            <button className="block w-full text-left font-bold text-sm text-accent cursor-pointer p-2 rounded-full transition-colors hover:bg-secondary">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
