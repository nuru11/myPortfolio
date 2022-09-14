import React from 'react'
import "./nav.css"
import {ImHome3} from "react-icons/im"
import {AiOutlineUser} from "react-icons/ai"
import {BiBookAlt} from "react-icons/bi"
import {RiCustomerService2Line} from "react-icons/ri"
import {CgWebsite} from "react-icons/cg"
import {BiPhoneCall} from "react-icons/bi"
import {useState} from "react"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav == "#" ? "active" : ""}><ImHome3 /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav == "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav == "#experience" ? "active" : ""}><BiBookAlt /></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav == "#services" ? "active" : ""}><RiCustomerService2Line /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav == "#portfolio" ? "active" : ""}><CgWebsite /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav == "#contact" ? "active" : ""}><BiPhoneCall /></a>
    </nav>
  )
}

export default Nav