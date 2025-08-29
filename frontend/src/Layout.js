import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopExpanded, setDesktopExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(true);
  return (
    <div className="h-screen relative">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      
      <div className="flex h-full relative">
      <Sidebar 
      sidebarOpen={sidebarOpen} 
      setSidebarOpen={setSidebarOpen} 
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}
      desktopExpanded={desktopExpanded}
      setDesktopExpanded={setDesktopExpanded}/>

        <main className="flex-1 overflow-auto relative z-30">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout