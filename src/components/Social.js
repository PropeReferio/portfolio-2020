import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Social() {
  const [isLinkedinBlack, setIsLinkedinBlack] = useState(true);
  const [isGithubBlack, setIsGithubBlack] = useState(true);
  const [isPhoneBlack, setIsPhoneBlack] = useState(true);

  return (
    <div className="socialIcons">
      <a onMouseEnter={() => setIsGithubBlack(false)}
        onMouseLeave={() => setIsGithubBlack(true)}
        href="https://github.com/PropeReferio">
        <FaGithub size={44} style={{ fill: isGithubBlack ? '#fff' : '#262626' }} />
      </a>
      <a onMouseEnter={() => setIsLinkedinBlack(false)}
        onMouseLeave={() => setIsLinkedinBlack(true)}
        href="https://www.linkedin.com/in/bostevens-a-softwareengineer/">
        <FaLinkedin size={44} style={{ fill: isLinkedinBlack ? '#fff' : '#262626' }} />
      </a>
      <a onMouseEnter={() => setIsPhoneBlack(false)}
        onMouseLeave={() => setIsPhoneBlack(true)}
        href="tel: +1 615-788-9366">
        <FaPhone size={36} style={{ fill: isPhoneBlack ? '#fff' : '#262626' }} />
      </a>
    </div>
  )
}