import React from 'react';
import { HomeIcon, HeartIcon } from "@heroicons/react/outline";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    return (
        <div className={`text-[#EBE3D5] bg-[#776B5D] p-5 text-md
        border-r border-[#F3EEEA] overflow-y-scroll 
        scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-
        [15rem] ${sidebarOpen ? 'block' : 'hidden'} pb-36`}>

            <div className="space-y-0">
                <button className="flex items-center space-x-2 hover:bg-[#EBE3D5]/40 w-[10rem] h-[2.5rem] pl-3 pb-0">
                    <HomeIcon className="h-5 w-5" />
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:bg-[#EBE3D5]/40 w-[10rem] h-[2.5rem] pl-3 ">
                    <HeartIcon className="h-5 w-5" />
                    <p>Favorites</p>
                </button>
                <hr className="w-100 border-[#F3EEEA]" />
            </div>
        </div>
    );
}

export default Sidebar;