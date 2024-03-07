import React from 'react'
import "./about.css"
import MY from "../../assets/myphoto2.jpeg"
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
            <img src={MY} alt="about me" />
          </div>
        </div>
      

      <div className='about__content'>
        <div className='about__cards'>


        
        <a href='https://github.com/nuru11?tab=repositories' rel="noreferrer" target="_blank">
          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>over 10 completed</small>
          </article>
          </a>
       </div>

        <p>
        I am an experienced software engineer with a strong background in designing, developing, and maintaining high-quality software systems. I specialize in crafting efficient and scalable solutions tailored to meet your specific requirements. Throughout the software development lifecycle, I excel in problem-solving, architecture design, and implementing best practices. I have a deep understanding of various programming languages, frameworks, and methodologies, allowing me to choose the most suitable tools for your project. Let's work together to drive your business forward and create seamless user experiences.
        </p>

        <a href='#contact' className='btn btn-primary'>lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About