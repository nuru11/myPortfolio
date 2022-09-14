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
        Hey, I’m a developer with experience in building websites for small and medium sized businesses, and help for develop a big project, if you looking for someone who build you personal, E-commerce or any kind of website and develop an existing web, leave a message even if you cant pay for it, feel free to message and know my free services.
        </p>

        <a href='#contact' className='btn btn-primary'>lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About