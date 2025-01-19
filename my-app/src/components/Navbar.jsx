import React, { useRef, useState } from 'react'
import logo from '../assets/logo.svg'
import underline from '../assets/nav_underline.svg'
import menuOpen from '../assets/menu_open.svg'
import menuClose from '../assets/menu_close.svg'

// Navbar component - Handles navigation and mobile menu functionality
const Navbar = () => {
  // State to track active menu item
  const [menu, setMenu ] = useState('home')
  // Reference to mobile menu for handling open/close animations
  const menuRef = useRef();

  // Handler to open mobile menu by adjusting its position
  const openMenu = () => {
    menuRef.current.style.right='0';
  }

  // Handler to close mobile menu by moving it off-screen
  const closeMenu = () => {
    menuRef.current.style.right='-350px';
  }

  return (
    // Main navigation container with hero section ID
    <div id='hero' className='navBar'>
        {/* Logo with specific width */}
        <img src={logo} alt="" style={{width: "260px"}}/>
        {/* Mobile menu open button */}
        <img src={menuOpen} onClick={openMenu} alt="" className='navMobileOpen' style={{cursor: "pointer"}}/>

        {/* Navigation menu list with mobile functionality */}
        <ul ref={menuRef}  className='navMenu newNav'>
            {/* Mobile menu close button */}
            <img src={menuClose} onClick={closeMenu} alt="" className='navMobileClose' />
            
            {/* Navigation items with conditional underline rendering based on active state */}
            <li><a href="#home" onClick={() => setMenu('home')}>Home</a>{menu === 'home' ? <img src={underline} alt="" /> :<></> }</li>
            <li><a href="#about" onClick={() => setMenu('about')}>About</a>{menu === 'about' ? <img src={underline} alt="" /> :<></> }</li>
            <li><a href="#services" onClick={() => setMenu('services')}>Services</a>{menu === 'services' ? <img src={underline} alt="" /> :<></> }</li>
            <li><a href="#work" onClick={() => setMenu('work')}>Portfolio</a>{menu === 'work' ? <img src={underline} alt="" /> :<></> }</li>
            <li><a href="#contact" onClick={() => setMenu('contact')}>Contact</a>{menu === 'contact' ? <img src={underline} alt="" /> :<></> }</li> 
        </ul>

        {/* Contact button in navigation */}
        <div className='navConnect'><a href="#contact" className='text-white' style={{textDecoration: 'none'}}>Connect with me</a></div>
    </div>
  )
}

export default Navbar





