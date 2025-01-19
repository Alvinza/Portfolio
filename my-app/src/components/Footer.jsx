import React from 'react'
import footerLogo from '../assets/logo.svg'
import userIcon from '../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerTop">
            <div className="footerTopLeft">
                <img src={footerLogo} alt="" style={{width: "280px"}}/>
                <p>Lorem ipsum, dolor si adipisicing elit. Quaerat dolores hic ut modi quos expedita eaque aliquid , nobis rem deserunt necessitatibus.</p>
            </div>
            <div className="footerTopRight">
                <div className="footerEmailInput">
                    <img src={userIcon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footerSubscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footerBottom">
            <p className="footerBottomLeft">&copy; Alvin Zondi. All rights reserved</p>
             <div className="footerBottomRight">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
             </div>
        </div>
    </div>
  )
}

export default Footer