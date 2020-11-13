import React, { useState, useEffect } from 'react';
import { FaHamburger } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function MobileNavBar() {
	const [isVisible, setIsVisible] = useState(false)

	function toggleIsVisible () {
		setIsVisible(!isVisible);
	}

	return(
		<div id="mobileNavBar">
			<div id="mobileNavButton">
				<FaHamburger 
					size={28} 
					onClick={toggleIsVisible}
					style={{ fill: '#fff' }} />
			</div>
			<div id="mobileNavLinks"
			style={{ display: isVisible ? "block" : "none" }}
			>
				<nav>
					<ul>
						<li id='Home'>
							<Link to='/' onClick={toggleIsVisible}>
								Home
							</Link>
						</li>
						<li id='About'>
							<Link to='/about' onClick={toggleIsVisible}>
								About
							</Link>
						</li>
						<li id='Projects'>
							<Link to='/projects' onClick={toggleIsVisible}>
								Projects
							</Link>
						</li>
						<li id='Skills'>
							<a href="/#skills" onClick={toggleIsVisible}>
								Skills
							</a>
						</li>
						<li id='Referrals'>
							<a href="/#referrals" onClick={toggleIsVisible}> 
								Referrals
							</a>
						</li>
						<li id='Contact'>
							<Link to='/contact' onClick={toggleIsVisible}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
	</div>
		
	)
}