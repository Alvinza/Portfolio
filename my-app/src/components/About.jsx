import React from 'react'
// Importing SVG pattern for visual design elements 
import themePattern from '../assets/theme_pattern.svg'
// Importing profile image for the about section
import profileImg from '../assets/about_profile.png'

// About component - Displays personal information, skills, and achievements
const About = () => {
  return (
    // Main container with ID for navigation and styling
    <div id='about' className='about'>
        {/* Title section with decorative pattern */}
        <div className="aboutTitle">
            <h1>About me</h1>
            <img src={themePattern} alt="" />
        </div>

        {/* Main content section with two columns */}
        <div className="aboutSection">
            {/* Left column containing profile image */}
            <div className="aboutLeft">
                <img src={profileImg} alt="" style={{width: "500px"}}/>
            </div>

            {/* Right column with bio and skills */}
            <div className="aboutRight">
                {/* Personal biography paragraphs */}
                <div className="aboutPara">
                    <p>Meet me, a passionate 21-year-old tech enthusiast who recently conquered an intensive coding bootcamp at HyperionDev, marking the beginning of
                         my journey into the vast world of software development. With an insatiable curiosity and a natural affinity for
                     problem-solving, I thrive on the thrill of mastering new programming concepts and turning complex chal
                     lenges into elegant solutions. </p>
                    <p>My dedication to continuous learning and genuine enthusiasm for coding suggests I'm not just entering the tech industry – I'm poised to make my mark on it.</p>
                </div>

                {/* Skills section with progress bars */}
                <div className="aboutSkills">
                    {/* Individual skill items with progress indicators using HR width */}
                    <div className="aboutSkill"><p>HTML & CSS <hr style={{width: '65%'}} /></p></div>
                    <div className="aboutSkill"><p>React JS <hr style={{width: '70%'}} /></p></div>
                    <div className="aboutSkill"><p>Javascript <hr style={{width: '60%'}} /></p></div>
                    <div className="aboutSkill"><p>Bootstrap <hr style={{width: '50%'}} /></p></div>
                    <div className="aboutSkill"><p>Express <hr style={{width: '55%'}} /></p></div>
                    <div className="aboutSkill"><p>Node js<hr style={{width: '60%'}} /></p></div>
                    <div className="aboutSkill"><p>MongoDb<hr style={{width: '50%'}} /></p></div>
                </div>
            </div>
        </div>

        {/* Achievements section with statistics */}
        <div className="aboutAchievements">
            {/* Years of experience stat */}
            <div className="aboutAchievement">
                <h1>1+</h1>
                <p>Years of experience</p>
            </div>
            <hr />
            {/* Projects completed stat */}
            <div className="aboutAchievement">
                <h1>15+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            {/* Happy clients stat */}
            <div className="aboutAchievement">
                <h1>10+</h1>
                <p>Happy clients</p>
            </div>
        </div>
    </div>
  )
}

export default About