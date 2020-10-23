import React, { Image } from 'react';
// import { cssImage } from '../img/css.png';

export default function Skills() {
	return(
		<div className="skillWrapper">
			<div className="skillRow">
				<div>
					PYTHON
				</div>
				<div>
					JAVASCRIPT
				</div>
				<div>
					REACT
				</div>
			</div>
			<div className="skillRow">
				<div>
					PANDAS
				</div>
				<div>
					NUMPY
				</div>
				<div>
					DASH
				</div>
			</div>
			<div className="skillRow">
				<div>
					SQL
				</div>
				<div>
					HTML
				</div>
				<div>
					CSS
					{/* <Image src={require('../img/css.png')} alt="CSS"/> */}
				</div>
			</div>
		</div>
	)
}