import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Social() {
	const darkSmoke = '#262626';
	const white = '#fff';
  const [isLinkedinBlack, setIsLinkedinBlack] = useState(false);
  const [isGithubBlack, setIsGithubBlack] = useState(false);
  const [isPhoneBlack, setIsPhoneBlack] = useState(false);
  const [isEmailBlack, setIsEmailBlack] = useState(false);

  return (
    <div className="socialIcons">
      <a onMouseEnter={() => setIsGithubBlack(true)}
        onMouseLeave={() => setIsGithubBlack(false)}
        rel="noopener noreferrer" target="_blank"
        href="https://github.com/PropeReferio"
        >
        <FaGithub size={38} style={{ fill: isGithubBlack ? darkSmoke : white }} />
      </a>
      <a onMouseEnter={() => setIsLinkedinBlack(true)}
        onMouseLeave={() => setIsLinkedinBlack(false)}
        rel="noopener noreferrer" target="_blank"
        href="https://www.linkedin.com/in/bostevens-a-softwareengineer/">
        <FaLinkedin size={38} style={{ fill: isLinkedinBlack ? darkSmoke : white }} />
      </a>
      <a onMouseEnter={() => setIsPhoneBlack(true)}
        onMouseLeave={() => setIsPhoneBlack(false)}
        rel="noopener noreferrer" target="_blank"
        href="tel: +1 615-788-9366">
        <FaWhatsapp size={38} style={{ fill: isPhoneBlack ? darkSmoke : white }} />
      </a>
      <a onMouseEnter={() => setIsEmailBlack(true)}
        onMouseLeave={() => setIsEmailBlack(false)}
        rel="noopener noreferrer" target="_blank"
        href="mailto:pythonforhire@protonmail.com">
        <FaRegEnvelope size={38} style={{ fill: isEmailBlack ? darkSmoke : white }} />
      </a>
    </div>
  )
}