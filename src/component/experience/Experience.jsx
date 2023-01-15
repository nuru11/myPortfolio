import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
import {AiOutlineReload} from "react-icons/ai"

const Experience = () => {
  return (
    <section id="experience">
      <h5>the skills i have</h5>
      <h2>my Experience</h2>

      <div className='container experience__container'>

        <div className="experience__frontend">
          <h3>frontend development</h3>
          <div className="experience__content">

          <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
               <h5>HTML</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h5>CSS</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h5>JAVASCRIPT</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h5>REACT-js</h5>
              <small className="text-light">Advanced</small>
             </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h5>Next-js</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
            <AiOutlineReload className='experience__details-icon' />
              <div>
              <h5>REACT NATIVE</h5>
              <small className="text-light">learning</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>backend development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
               <h5>HTML</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h5>CSS</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h5>JAVASCRIPT</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h5>NODE JS</h5>
              <small className="text-light">Experience</small>
             </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h5>EXPRESS</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h5>MONGODB</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h5>Next-js</h5>
              <small className="text-light">Experience</small>
              </div>
            </article>
          </div>

       </div>
      </div>
    </section>
  )
}

export default Experience
