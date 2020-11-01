import React from 'react';

import Project from '../Project'

export default function Projects() {
  return(
		<>
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
				title="International Guard Services" 
				description="Sed ut perspiciatis unde omnis iste natus error sit 
				voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
				 ipsa quae ab illo inventore veritatis et quasi architecto beatae 
				 vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
				 sit aspernatur aut odit aut fugit, sed quia consequunt adipisci"
				skills="Wordpress, HTML, CSS"
				imagePath="https://picsum.photos/300/200"
				pictureFirst={false}
				link="https://wilsoninvestigations.com/"
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
		</>
  )
}