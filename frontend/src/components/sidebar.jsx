import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, HeartIcon, BookOpenIcon } from "@heroicons/react/outline";

function Sidebar({ mobileOpen, setMobileOpen, desktopExpanded, setDesktopExpanded }) {
  
  useEffect(() => {
    const handleWindowResize = () => {
      const isTabletOrMobile = window.innerWidth < 768; 
      
      if (isTabletOrMobile && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [mobileOpen, setMobileOpen]);

  return (
    <div className="relative">
      <div
        className={`text-accent bg-primary p-5 text-md border-r border-accent-50 
          overflow-y-scroll scrollbar-hide h-screen pb-36
          ${mobileOpen ? 'block' : 'hidden'} lg:block
          ${desktopExpanded ? 'lg:w-[15rem]' : 'lg:w-[4rem]'}
          transition-all duration-300`}
      >

        <div className={`space-y-0 ${!desktopExpanded ? 'lg:hidden' : ''}`}>
          <Link to='/'>
            <button className={`flex items-center hover:bg-secondary w-full h-[2.5rem] pl-3 pb-0 ${!desktopExpanded && 'lg:justify-center lg:pl-0'}`}>
              <HomeIcon className="h-5 w-5" />
              <p className={`ml-2 ${desktopExpanded ? 'lg:block' : 'lg:hidden'}`}>Home</p>
            </button>
          </Link>
          
          <Link to="/favorites">
            <button className={`flex items-center hover:bg-secondary w-full h-[2.5rem] pl-3 ${!desktopExpanded && 'lg:justify-center lg:pl-0'}`}>
              <HeartIcon className="h-5 w-5" />
              <p className={`ml-2 ${desktopExpanded ? 'lg:block' : 'lg:hidden'}`}>Favorites</p>
            </button>
          </Link>
          
          <Link to="/recents">
            <button className={`flex items-center hover:bg-secondary w-full h-[2.5rem] pl-3 ${!desktopExpanded && 'lg:justify-center lg:pl-0'}`}>
              <BookOpenIcon className="h-5 w-5" />
              <p className={`ml-2 ${desktopExpanded ? 'lg:block' : 'lg:hidden'}`}>Recents</p>
            </button>
          </Link>
          
          <hr className="w-full border-accent-50" />
        </div>
      </div>

      <div
        className={`absolute top-16 ${desktopExpanded ? '-right-4' : '-right-4'} z-50 max-lg:hidden flex cursor-pointer`}
        onClick={() => setDesktopExpanded(!desktopExpanded)}
      >
        <div className='flex items-center justify-center border border-accent hover:border-accent-50 rounded-full w-8 h-8 bg-primary shadow-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;