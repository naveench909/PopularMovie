import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/trending.png'
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <Link to="/PopularMovie/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
          <ul className="nav-links">
            <li>
              <Link to="/PopularMovie/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar