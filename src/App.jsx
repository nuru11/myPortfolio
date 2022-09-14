// rafce
import "./index.css"

import React from 'react'
import Nav from "./component/nav/Nav"
import Header from "./component/header/Header"
import About from "./component/about/About"
import Experience from "./component/experience/Experience"
import Services from "./component/services/Services"
import Portfolio from "./component/portfolio/Portfolio"
import Contact from "./component/contact/Contact"
import Footer from "./component/footer/Footer"



const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}


export default App




