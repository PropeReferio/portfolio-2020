import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Social() {
  const [isLinkedinBlack, setIsLinkedinBlack] = useState(true);
  const [isGithubBlack, setIsGithubBlack] = useState(true);
  const [isPhoneBlack, setIsPhoneBlack] = useState(true);
  const [isEmailBlack, setIsEmailBlack] = useState(true);

  return (
    <div className="socialIcons">
      <a onMouseEnter={() => setIsGithubBlack(false)}
        onMouseLeave={() => setIsGithubBlack(true)}
        rel="noopener noreferrer" target="_blank"
        href="https://github.com/PropeReferio"
        >
        <FaGithub size={38} style={{ fill: isGithubBlack ? '#fff' : '#262626' }} />
      </a>
      <a onMouseEnter={() => setIsLinkedinBlack(false)}
        onMouseLeave={() => setIsLinkedinBlack(true)}
        rel="noopener noreferrer" target="_blank"
        href="https://www.linkedin.com/in/bostevens-a-softwareengineer/">
        <FaLinkedin size={38} style={{ fill: isLinkedinBlack ? '#fff' : '#262626' }} />
      </a>
      <a onMouseEnter={() => setIsPhoneBlack(false)}
        onMouseLeave={() => setIsPhoneBlack(true)}
        rel="noopener noreferrer" target="_blank"
        href="tel: +1 615-788-9366">
        <FaWhatsapp size={38} style={{ fill: isPhoneBlack ? '#fff' : '#262626' }} />
      </a>
      <a onMouseEnter={() => setIsEmailBlack(false)}
        onMouseLeave={() => setIsEmailBlack(true)}
        rel="noopener noreferrer" target="_blank"
        href="mailto:lemuel.b.stevens@gmail.com">
        <FaRegEnvelope size={38} style={{ fill: isEmailBlack ? '#fff' : '#262626' }} />
      </a>
    </div>
  )
}