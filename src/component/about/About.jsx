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
        Are you a business owner looking to take your digital presence to the next level? Look no further! I'm a freelance software developer with a wealth of experience in the industry.

Having worked in a software company, I've gained valuable expertise as a software developer. I have successfully delivered a range of projects, including ecommerce and booking system mobile apps, real estate ERPs, and WordPress and WooCommerce projects. My diverse portfolio showcases my ability to tackle various software development challenges.

But that's not all. I'm also passionate about sharing my knowledge and helping businesses thrive in the digital world. I've written insightful blog posts on topics like achieving success in the digital landscape and resolving technical issues. I invite you to explore my blog, where you'll find practical tips and strategies that can propel your business forward.

In addition to delivering top-notch software development solutions, I believe in going above and beyond for my clients. That's why I offer complimentary services such as SEO optimization, speed optimization, and social media consultancy. Furthermore, I provide exclusive discounts for mobile app development, ensuring that your investment is both cost-effective and impactful.

Now, let me ask you: Are you ready to take your business to new heights? By choosing me as your freelance software developer, you're not only getting technical expertise but also a partner dedicated to your success. Let's work together to overcome your business challenges and achieve remarkable results        </p>

        <a href='#contact' className='btn btn-primary'>lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About