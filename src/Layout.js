import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="h-screen relative">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      
      <div className="flex h-full relative">
          <Sidebar sidebarOpen={sidebarOpen}/>

        <main className="flex-1 overflow-auto relative z-30">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout