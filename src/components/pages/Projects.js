import React from 'react';

import Project from '../Project'

export default function Projects() {
  return(
		<div id="projects">
			<h1 className="darkTextShadow">PROJECTS</h1>
			<Project 
				title="Wilson Investigations" 
				description="It was my responsibility to implement the styles, the
				contact form, anti-spam security measures, image optimization, media
				offloading using Cloudfront CDN and backing up the site regularly to 
				an S3 Bucket with AWS."
				skills="HTML, CSS, AWS, CDN, Cloudfront, S3 Buckets"
				imagePath="../images/projects/wilson-investigations-web-development.png"
				pictureFirst={true}
				link="https://wilsoninvestigations.com/"
				/>
			<Project 
				id="project2"
				title="App with Credit Card Validation" 
				description="I can't talk in great detail about this one because I
				signed an NDA, but it was a really cool project that involved credit
				card validation. I wrote custom error messages that explained to the
				user what might be wrong with their input, and developed security
				features to keep the user's payment secure."
				skills="React Native, Javascript, Toast, Text Mask"
				imagePath="../images/projects/credit-card-validation-02.png"
				pictureFirst={false}
				link=""
				/>
			<Project 
				title="COVID-19 Dashboard" 
				description="A data vizualization project. It takes data from the John
				Hopkins Github repository, identifies trends such as the steepening or
				flattening of the curve, and color codes the data in a heat map and
				tables."
				skills="Python, Pandas, Numpy, Dash, Flask, HTML, CSS"
				imagePath="../images/projects/covid-dashboard-data-visualization-python-pandas-dash-flask.png"
				pictureFirst={true}
				link="https://covid-dash-bo.herokuapp.com/"
				/>
			</div>
  )
}