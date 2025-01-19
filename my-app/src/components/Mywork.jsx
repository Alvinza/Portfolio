import React from 'react'
import themePattern from '../assets/theme_pattern.svg'
import workData from '../assets/mywork_data'
import arrowIcon from '../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="myworkTitle">
            <h1>My latest work</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="myworkContainer">
            {workData.map((work, index) => {
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="myworkShowmore">
            <p className='mt-2'>Show more</p>
            <img src={arrowIcon} alt="" />
        </div>
    </div>
  )
}

export default Mywork