import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    
    </div>
  )
}

export default Layout
