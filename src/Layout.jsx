import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// <Outlet /> use Layout as base and change the outlet  without affecting the header and footer
// in main file we tell them i use a Layout file and inside them i give everything in component because routing is doing nested
function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    {/* when we give the outlet then we can do nesting for besides of the react-router-dom */}
    <Footer />
    </>
  )
}

export default Layout