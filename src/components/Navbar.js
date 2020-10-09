import React from 'react';
import NavItem from './NavItem';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <NavItem name="Home" to="/"></NavItem>
        <NavItem name="About" to="/"></NavItem>
        <NavItem name="Project" to="/"></NavItem>
        <NavItem name="Skills" to="/"></NavItem>
        <NavItem name="Contact" to="/"></NavItem>
      </ul>
    </nav>
  )
}