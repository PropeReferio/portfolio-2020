import React, { useState } from 'react';
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
					size={38} 
					onClick={toggleIsVisible}
					style={{ fill: '#fff' }} />
			</div>
			<div id="mobileNavLinks"
			style={{ display: isVisible ? "block" : "none" }}
			>
				<nav>
					<ul>
						<li id='Home'>
							<Link to='/'>
								Home
							</Link>
						</li>
						<li id='About'>
							<Link to='/about'>
								About
							</Link>
						</li>
						<li id='Projects'>
							<Link to='/projects'>
								Projects
							</Link>
						</li>
						<li id='Skills'>
							<a href="/#skills">
								Skills
							</a>
						</li>
						<li id='Referrals'>
							<a href="/#referrals"> 
								Referrals
							</a>
						</li>
						<li id='Contact'>
							<Link to='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
	</div>
		
	)
}