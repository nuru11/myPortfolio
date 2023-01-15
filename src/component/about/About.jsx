import React from 'react'
import "./about.css"
import MY from "../../assets/myPhoto.jpg"
import {VscFolderLibrary} from "react-icons/vsc"

import "./about.css"

const About = () => {
  return (
    <section id="about" className='about'>
      
      <h5>Get to know</h5>
      <h2>about me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={MY} alt="about image" />
          </div>
        </div>
      

      <div className='about__content'>
        <div className='about__cards'>


        
        <a href='https://github.com/nuru11?tab=repositories' target="_blank">
          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>over 10 completed</small>
          </article>
          </a>
       </div>

        <p>
        Hi I'm Nuru Ibrahim and i passionate about all things programming. i work hard, i care about writing clean code and i genuinely love to learn. i'm currently looking for the right opportunity to work in an enviroment that will help me progress into a full-stack role.
        </p>

        <a href='#contact' className='btn btn-primary'>lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About