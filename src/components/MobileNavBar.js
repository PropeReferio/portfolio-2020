import React from 'react';
import { FaHamburger, FaHSquare, FaMobile } from "react-icons/fa";

export default function MobileNavBar() {
	return(
		<div id="mobileNavBar">
			<FaHamburger size={38} style={{ fill: '#fff' }} />
			<FaHSquare size={38} style={{ fill: '#fff' }} />
			<FaMobile size={38} style={{ fill: '#fff' }} />
		</div>
	)
}