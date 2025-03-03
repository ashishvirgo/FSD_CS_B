import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="/signup">SIGNUP</Link>
        </li>
        <li>
            <Link to="/login">LOGIN</Link>
        </li>
        <li>
            <Link to="/aboutus">ABOUT US</Link>
        </li>
        <li>
            <Link to="/contactus">Contact US</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
