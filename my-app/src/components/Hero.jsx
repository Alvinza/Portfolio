import React from 'react'
import profileImg from '../assets/profile_img.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileImg} alt="" style={{width: "280px"}}/>
        <h1> <span>I'm Alvin Zondi,</span> Full stack Developer based in South Africa</h1>
        <p>As a passionate Full Stack Developer based in the vibrant tech hub of Cape Town, I've spent the last year crafting seamless digital experiences from front-end to back-end, turning complex problems into elegant solutions.</p>
        <div className='heroAction'>
            <div className="heroConnect"><a href="#contact" className='text-white' style={{textDecoration: 'none'}}>Connect with me</a></div>
            <div className="heroResume">My resume</div>
        </div>
    </div>
  )
}

export default Hero