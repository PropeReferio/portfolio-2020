import React from 'react';

import Project from '../Project'

export default function Projects() {
  return(
		<>
			<h1>
				Projects Page
			</h1>
			<Project 
				title="International Guard Services" 
				description="Built with wordpress"
				skills="Wordpress, HTML, CSS"
				imagePath="https://picsum.photos/300/200"/>
		</>
  )
}