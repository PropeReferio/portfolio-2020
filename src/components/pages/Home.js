import React from 'react';
import Slider from '../Slider';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]

export default function Home() {
  
  return(
    <>
      <div id="mainBanner">
        <div className="grayFilter">
          <div className="bannerContainer">
            <div className="bannerTextBox">
              <h1>LOGO</h1>
              <h1>Dedicated. Driven. Coachable.</h1>
              <h4>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum</h4>
              <h4>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum</h4>
              <a href="tel:+1 615-788-9366"><button>
                <p>CALL NOW</p>
              </button></a>
            </div>
          </div>
        </div>
      </div>
      <h2 id="testisHeader">
        TESTIMONIALS
      </h2>
      <div className="two-column-row">
        <div id="testimonials">
          <div>
            {/* Make these sliders components. Pass in the text */}
              <div class="slides">
                <p>Highly adaptable and ready to learn. That’s what comes to mind when 
                I think about Bo! I was his manager and mentor while he worked in 
                our fast-paced start-up.  Although he came from a Python background 
                he jumped right into building an app--learning Javascript and 
                React Native along the way. He took time to prepare for our 
                meetings to keep them efficient, and best of all pleasant. 
                Bo is a great person to work with and I look forward to our 
                continued relationship.</p>
                <h4>Andy Malkin, Senior Fullstack Engineer, Chainstarters</h4>
              </div>
              <div class="slides">
                <p>Working with a self-starter like Bo has been so refreshing.
                   I brought Bo on for a data visualization project, which he 
                   quickly brought to fruition with minimal guidance. He 
                   selected the technologies and architecture for the project,
                    learning new methodologies as necessary. I can personally 
                    tell how passionate he is about this job, by how quickly 
                    he learns new tools, and how excited he is to implement 
                    them. He is also a great communicator and explains his 
                    work very clearly. Bo would be an asset to any company.</p>
                <h4>Arjun Srivastava, Software Engineer, Cloud Cafe Tech</h4>
              </div>
          </div>
        </div>
        <div className id="profile-photo">
        </div>
      </div>
      <div id="testimonialsSlider" >
        <Slider slides={images}/>
      </div>
    </>
  )
}