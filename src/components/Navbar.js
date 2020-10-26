import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li id='Home'>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li id='About'>
          <Link to='/about'>
            About
          </Link>
        </li>
        <li id='Projects'>
          <Link to='/projects'>
            Projects
          </Link>
        </li>
        <li id='Skills'>
          <a href="/#skills">
            Skills
					</a>
        </li>
        <li id='Referrals'>
          <a href="/#referrals"> 
            Referrals
					</a>
        </li>
        <li id='Contact'>
          <Link to='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}