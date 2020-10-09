import React from 'react';
import { Link } from "react-router-dom";

export default function NavItem({name, routerLink}) {
  return (
    <li id={name}>
      <Link to={routerLink}>
        {name}
      </Link>
    </li>
  )
}