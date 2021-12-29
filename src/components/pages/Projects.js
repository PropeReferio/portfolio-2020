import React from 'react';

import Project from '../Project'

export default function Projects() {
  return(
		<div id="projects">
			<h1 className="darkTextShadow">PROJECTS</h1>
			<Project 
				title="Stock Asset Middleware" 
				description="I was the sole developer of software that downloads assets,
				such as videos, photos and audio, from a stock website's API, and uploads
				them to cloud storage through another API. I had to optimize memory for
				the Docker container, research pricing on Azure and deploy to it, and
				keep track of previously ingested assets with a SQL database."
				skills="Python, Azure, SQL Server, Docker, APIs"
				imagePath="../images/projects/software-reverse-engineering-t.jpg"
				pictureFirst={false}
				link=""
				/>
			<Project 
				title="Automated Security Metrics Email" 
				description="I designed an email that automatically sends at the end
				of each month to inform managers of how secure our company was. A 
				table in a SQL database was updated daily with security metrics. These
				data were used to fill out the HTML of an email dynamically."
				skills="python, pandas, proxies, Jenkins, SQL, HTML"
				imagePath="../images/projects/classified.jpg"
				pictureFirst={true}
				link=""
				/>
			<Project 
				id="project2"
				title="Data Exfiltration Audit" 
				description="I researched, designed and implemented an organization-wide
				audit to ensure that data could only be transfered through specified
				channels, making it difficult for hackers to steal data."
				skills="gcloud, Powershell, SQL"
				imagePath="../images/projects/classified.jpg"
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
				imagePath="../images/projects/Hacker-Hero-a1.webp"
				pictureFirst={true}
				link="https://covid-dash-bo.herokuapp.com/"
				/>
			</div>
  )
}