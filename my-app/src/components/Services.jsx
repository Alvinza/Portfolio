import React from 'react'
import themePattern from '../assets/theme_pattern.svg'
import servicesData from '../assets/services_data'
import arrowIcon from '../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="servicesTitle">
            <h1>My Services</h1>
            <img src={themePattern} alt="" style={{marginTop: "5rem"}}/>
        </div>
        <div className="servicesContainer">
            {servicesData.map((service, index) => {
                return <div key={index} className='servicesFormat'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="servicesReadmore">
                        <p className='mt-2'>Read More</p>
                        <img src={arrowIcon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services