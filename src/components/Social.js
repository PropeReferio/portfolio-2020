import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Social() {
  const [isLinkedinBlack, setIsLinkedinBlack] = useState(true);
  const [isGithubBlack, setIsGithubBlack] = useState(true);

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
    </div>
  )
}