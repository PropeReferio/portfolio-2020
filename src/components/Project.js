import React from 'react';

export default function Project({ imagePath, title, description, skills }) {
	return(
		<div className='projectCard'>
			<img src={imagePath} alt="Project" />
			<div className='projectText'>
				<h3>{title}</h3>
				<p>{description}</p>
				<h5>{skills}</h5>
			</div>
		</div>
	)
}