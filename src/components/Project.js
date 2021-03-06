import React from 'react';

export default function Project({ 
	title, 
	description, 
	skills, 
	imagePath, 
	pictureFirst,
	link 
}) {
	if (link) {
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
	} else {
		return(
			<div className='projectCard' style={{ flexDirection: pictureFirst ? 'row' : 'row-reverse' }}>
				<div className="projectImageWrapper">
					<img src={imagePath} alt="Project" />
				</div>
				<div className='projectText'>
					<h2 className="darkTextShadow">{title}</h2>
					<p>{description}</p>
					<h5>Made with {skills}</h5>
				</div>
			</div>
		)
	}
}