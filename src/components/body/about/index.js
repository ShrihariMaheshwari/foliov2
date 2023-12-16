import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact'


function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
        Hello There 👋, I am 
        <br /> <span className='info-main'>Shrihari</span>.
        <br />Software Engineer and Architect <br /> Crafting Code, Design, and Deployment.
        </div>
        <div className='about-photo'>
          <img src={require('../../../assets/Coding.png')}  className='picture' /> 
        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About