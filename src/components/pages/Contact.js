import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
	const [isLinkedinGray, setIsLinkedinGray] = useState(false);
  const [isGithubGray, setIsGithubGray] = useState(false);
	const [isPhoneGray, setIsPhoneGray ] = useState(false);
	const [isEmailGray, setIsEmailGray ] = useState(false);
	const lightSmoke = '#a6a6a6';
	const white = '#fff';
  return(
		<div id="contact">
			<h1 className="darkTextShadow">CONTACT</h1>

			<a href="mailto: pythonforhire@protonmail.com"
				onMouseEnter={() => setIsEmailGray(true)}
        onMouseLeave={() => setIsEmailGray(false)}>
				<h3>
					<FaRegEnvelope size={38} style={{ fill: isEmailGray ? lightSmoke : white }} />
					   lemuel.b.stevens@protonmail.com
				</h3>
			</a>
			<a href="tel: +16157889366"
				onMouseEnter={() => setIsPhoneGray(true)}
				onMouseLeave={() => setIsPhoneGray(false)}>
				<h3>
					<FaWhatsapp size={38} style={{ fill: isPhoneGray ? lightSmoke : white }} />
					   +1 615-788-9366
				</h3>
			</a>
			<a href="https://github.com/PropeReferio"
				className="mobileOnlyContact"
				onMouseEnter={() => setIsGithubGray(true)}
				onMouseLeave={() => setIsGithubGray(false)}>
				<h3>
					<FaGithub size={38} style={{ fill: isGithubGray ? lightSmoke : white }} />
					   Github
				</h3>
			</a>
			<a href="https://www.linkedin.com/in/bostevens-a-softwareengineer/"
				className="mobileOnlyContact"
				onMouseEnter={() => setIsLinkedinGray(true)}
				onMouseLeave={() => setIsLinkedinGray(false)}>
				<h3>
					<FaLinkedin size={38} style={{ fill: isLinkedinGray ? lightSmoke : white }} />
					   Linkedin
				</h3>
			</a>
		</div>
  )
}