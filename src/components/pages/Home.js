import React from 'react';
import Skills from '../Skills';
import Carousel from 'react-elastic-carousel'
import CarouselItem from '../CarouselItem'

export default function Home() {
  
  return(
    <>
      <div id="mainBanner">
        <div className="grayFilter">
          <div className="bannerContainer">
            <div className="bannerTextBox textShadow">
              <h1>Dedicated. Driven. Coachable.</h1>
              <h3>I'm a self-starter who's passionate about figuring out
							how things work. </h3>
              <a href="tel:+1 615-788-9366"><button id="callButton" className="boxShadow">
                <h4>CALL NOW</h4>
              </button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="two-column-row">
        <div id="quote" className="textShadow">
					<h3>Believe passionately in what you do, and never knowingly 
						compromise your standards and values. Act like a true professional, 
						aiming for true excellence, and the money will follow.</h3>
					<h5>- David Maister</h5>
        </div>
        <div className id="profile-photo">
        </div>
      </div>
      <h2 id="referrals" className="darkTextShadow">
        REFERRALS
      </h2>
			<Carousel itemsToShow={1} >
				<CarouselItem 
					body='Highly adaptable and ready to learn. That’s what comes to mind when 
					I think about Bo! I was his manager and mentor while he worked in 
					our fast-paced start-up.  Although he came from a Python background 
					he jumped right into building an app--learning Javascript and 
					React Native along the way. He took time to prepare for our 
					meetings to keep them efficient, and best of all pleasant. 
					Bo is a great person to work with and I look forward to our 
					continued relationship.' 
					author='Andy Malkin, Senior Fullstack Engineer, Chainstarters' 
					className="sliderImage1"
					/>
				<CarouselItem 
					body='Working with a self-starter like Bo has been so refreshing.
					I brought Bo on for a data visualization project, which he 
					quickly brought to fruition with minimal guidance. He 
					selected the technologies and architecture for the project,
					 learning new methodologies as necessary. I can personally 
					 tell how passionate he is about this job, by how quickly 
					 he learns new tools, and how excited he is to implement 
					 them. He is also a great communicator and explains his 
					 work very clearly. Bo would be an asset to any company.' 
					author='Arjun Srivastava, Software Engineer, Cloud Cafe Tech' 
					className="sliderImage2"/>
			</Carousel>
      <h2 id="skills" className="darkTextShadow">SKILLS</h2>
      <Skills />
    </>
  )
}