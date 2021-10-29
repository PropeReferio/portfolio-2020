import React from 'react';

export default function About() {
  return(
		<>
			{/* <h1>ABOUT ME</h1> */}
			<div id="about" className="card boxShadow">
				<h3 className="darkTextShadow">DATA SPECIALIST</h3>
				<p className="about">
					My specialty is using Python to work with data. You could call me a
					Data Engineer. I excel at ingesting data from complex APIs, unit
					testing those ingestions, saving that data to a database, and putting
					the whole thing on a regular cadence to ensure the most current data
					possible.
					<br></br>
					<br></br>
					Ultimately, I love all things Python and Back End.
				</p>
				<h3 className="darkTextShadow">STRONG COMMUNICATOR</h3>
				<p className="about">I have a variety of interests, which has 
					exposed me to many
					walks of life. As a result of this, and having worked in skiing and
					skydiving instruction, I'm able to talk to just about anyone and convey
					my ideas clearly.
					<br></br>
					<br></br>
					This translates into the way I code. I'm careful to leave lots of 
					comments, and give my functions/classes descriptive names that obviates
					the need for guesswork by my coworkers.
					<br></br>
					<br></br>
					I'm also fluent in Spanish.
				</p>
				<h3 className="darkTextShadow">PROBLEM SOLVER</h3>
				<p className='about'>
					I'm committed to doing things the right way the first time. I love
					working on difficult problems and the thrill of finding the solution.
				</p>
				<h3 className="darkTextShadow">SELF-MANAGED</h3>
				<p className="about">I manage myself 
					and my time well, and stay on task while working remotely.
				</p>
			</div>
		</>
  )
}