import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
    <div className="container d-flex align-items-center">
      <div className="logo">
        <a href="/" className='text-decoration-none text-light'>Rohit-Developer</a>
      </div>
      <div className="nav-item">
        <ul className='list-unstyled d-flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/my-project">My Project</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header