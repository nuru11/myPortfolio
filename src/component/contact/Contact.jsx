import React from 'react'
import "./contact.css"
import {BiMessageDots} from "react-icons/bi"
import { useRef } from 'react'
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n0r4bia', 'template_r4dx9bh', form.current, '29au9zf9YNegYN-bb')
e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
    <h5>get in touch</h5>
    <h2>contact me</h2>
    
    <div className="container contact__container">
    <div className="contact__options">
    <article className="contact__option">
    <BiMessageDots className='contact__option-icon' />
    <h4>Email</h4>
    <h5>nuruibrahim11111@gmail.com</h5>
    <a href="mailto:nuruibrahim11111@gmail.com" >message me</a>
    </article>

    <article className="contact__option">
    <BiMessageDots className='contact__option-icon' />
    <h4>Whattsap</h4>
    <h5>+251967247262</h5>
    <a href="https://api.whatsapp.com/send?phone=0966202667" >message me</a>
    </article>

    <article className="contact__option">
    <BiMessageDots className='contact__option-icon' />
    <h4>Telegram</h4>
    <h5>nuru ibrahim</h5>
    <h6>+251967247262</h6>
    <a href="mailto:nuruibrahim11111@gmail.com" >message me</a>
    </article>

    </div>
    
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder="enter your full name" required/>
    <input type="email" name="email" placeholder="enter your email" required/>
    <textarea name="message" row="7" placeholder="leave a message" required></textarea>
    <button type="submit" className="btn btn-primary">send a message</button>
    </form>
    </div>
    </section>
    
  )
}
 
export default Contact