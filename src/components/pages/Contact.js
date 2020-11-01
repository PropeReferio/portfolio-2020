import React, { useState } from 'react';
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
	const [isPhoneGray, setIsPhoneGray ] = useState(false);
	const [isEmailGray, setIsEmailGray ] = useState(false);
	const lightSmoke = '#a6a6a6';
	const white = '#fff';
  return(
		<div id="contact">
			<h1 className="darkTextShadow">CONTACT</h1>

			<a href="mailto: lemuel.b.stevens@gmail.com"
				onMouseEnter={() => setIsEmailGray(true)}
        onMouseLeave={() => setIsEmailGray(false)}>
				<h3>
					<FaWhatsapp size={38} style={{ fill: isEmailGray ? lightSmoke : white }} />
					   lemuel.b.stevens@gmail.com
				</h3>
			</a>
			<a href="tel: +16157889366"
				onMouseEnter={() => setIsPhoneGray(true)}
				onMouseLeave={() => setIsPhoneGray(false)}>
				<h3>
					<FaRegEnvelope size={38} style={{ fill: isPhoneGray ? lightSmoke : white }} />
					   +1 615-788-9366
				</h3>
			</a>
		</div>
  )
}