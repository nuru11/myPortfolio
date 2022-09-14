import React from 'react'
import "./services.css"
import {BsCheck} from "react-icons/bs"

const Services = () => {
  return (
    <section id="services">
      <h5>what i offer</h5>
      <h2>services</h2>

      <div className='.container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>frontend project</h3>
          </div>
          <ul className='service__list'>
            <li>
               <BsCheck className="service__list-icon" />
               <p>convert (figma,PSD and XD) design into responsive page.</p>
            </li>

            <li>
               <BsCheck className="service__list-icon" />
               <p>build landing page.</p>
            </li>

            <li>
               <BsCheck className="service__list-icon" />
               <p>build personal page.</p>
            </li>

            <li>
               <BsCheck className="service__list-icon" />
               <p>edit and design exists page.</p>
            </li>

            <li>
               <BsCheck className="service__list-icon" />
               <p>find debugging.</p>
            </li>

            <li>
               <BsCheck className="service__list-icon" />
               <p>you can buy already exist page.</p>
            </li>

            <li>
               <BsCheck className="service__list-icon" />
               <p>give advics.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

      
      </div>
    </section>
  )
}

export default Services