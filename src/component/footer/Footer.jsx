import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer__logo'></a>

    <ul>
      <li><a href="#"></a></li>
      <li><a href="#about">about</a></li>
      <li><a href="#services">services</a></li>
      <li><a href="#portfolio">portfolio</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact"></a>contact</li>
    </ul>

    <div className='footer__socials'>
      
      <a href="https://instgram.com">Telegram</a>
      <a href="https://twitter.com">Whattsap</a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; all right reserved</small>
    </div>
   </footer>
  )
}

export default Footer