import React from 'react'
import "./header.css"
import CTA from "./CTA.jsx"

import HeaderSocial from "./headerSocial"
import MY from "../../assets/myPhoto.jpg"

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>hello, I'm</h5>
      <h1>Nuru ibrahim</h1>
      <h5 className="text-light">full-stack Developer</h5>
      <CTA />
      <HeaderSocial />
  

    <div className='me'>
          <img className='mee' src={MY} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">scroll down</a>
   </div>
    </header>
  )
}

export default Header