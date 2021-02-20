import React from 'react';
// import cssImage from './../img/css.png';

export default function Skills() {
	return(
		<div className="skillWrapper boxShadow">
			<div>
				<img src='images/skills/python.png' alt='Python' />
				<img src='images/skills/flask.png' alt='Flask' />
				{/* <img src='images/skills/javascript.png' alt='Javascript' /> */}
				{/* Maybe add Google Cloud */}
				<img src='images/skills/pandas.png' alt='Pandas' />
				<img src='images/skills/numpy.png' alt='Numpy' />
			</div>
			<div>
				<img src='images/skills/postgres.png' alt='PostgreSQL' />
				<img src='images/skills/react.png' alt='React' />
				<img src='images/skills/html.png' alt='HTML' />
				<img src='images/skills/css.png' alt='CSS' />
			</div>
		</div>
	)
}