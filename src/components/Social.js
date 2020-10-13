import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div className="socialIcons">
      <a href="https://github.com/PropeReferio">
        <FaGithub size={44} color="black" />
      </a>
      <a href="https://www.linkedin.com/in/bostevens-a-softwareengineer/">
        <FaLinkedin size={44} color="black" />
        </a>
    </div>
  )
}