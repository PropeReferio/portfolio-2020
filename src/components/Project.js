import React from 'react';

export default function Project({ 
	title, 
	description, 
	skills, 
	imagePath, 
	pictureFirst,
	link 
}) {
	return(
		<div className='projectCard' style={{ flexDirection: pictureFirst ? 'row' : 'row-reverse' }}>
			<a href={link} rel="noopener noreferrer" target="_blank">
				<img src={imagePath} alt="Project" />
			</a>
			<div className='projectText'>
				<a href={link} rel="noopener noreferrer" target="_blank">
					<h2 className="darkTextShadow">{title}</h2>
				</a>
				<p>{description}</p>
				<h5>Made with {skills}</h5>
			</div>
		</div>
	)
}