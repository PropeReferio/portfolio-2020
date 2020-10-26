import React from 'react';

export default function About() {
  return(
		<>
			<h1>
				About Page
			</h1>
			<div className="card">
				<p id="about">
					<span className='aboutSection'>STRONG COMMUNICATOR:</span> I'm a developer with many interests, which has exposed me to many
					walks of life. As a result of this, and having worked in skiing and
					skydiving instruction, I'm able to talk to just about anyone, and get
					my ideas across clearly.
					<br></br>
					<br></br>
					This translates into the way I code. I'm careful to leave lots of 
					comments, and give my functions/classes descriptive names that obviates
					the need for guesswork by my coworkers.
					<br></br>
					<br></br>
					<span className='aboutSection'>PROBLEM-SOLVER:</span> I'm sometimes criticized for being too thorough, but this is because
					I'm committed to doing things the right way the first time. I love
					working on difficult problems and the thrill of finding the solution.
					<br></br>
					<br></br>
					<span className='aboutSection'>SELF-MANAGED:</span> "I manage myself 
					and my time well, and stay on task while working remotely.
				</p>
			</div>
		</>
  )
}