import React from 'react';
import './portfolio.css';


import IMG1 from '../../assets/next-js-ecommerce.jpg';
import IMG2 from '../../assets/e-commerce.jpg';
import IMG3 from '../../assets/nodejs-ecommerce.jpg';
import IMG4 from '../../assets/real-estate.jpg';
import IMG5 from '../../assets/hotel.jpg';
//import IMG1 from '../../assets/resturant-img.jpg';
//import { FaGithub } from 'react-icons/fa';

const data = [
  {
    id: 1,
    image: IMG1,
    github: 'https://github.com/nuru11/NextJs-Restaurant-App',
    goLive: 'https://next-js-restaurant-app-zeta.vercel.app/',
    name: 'Next-js Restaurant Web',
    tools: 'Next-js,React-js,Redux-toolkit,Typescript,Mongodb,jest,React-Testing-Library',
  },
  
  {
    id: 2,
    image: IMG2,
    github: 'https://github.com/nuru11/testEcom.git',
    goLive: 'https://react-e-commerce-app-topaz.vercel.app/',
    name: 'React-js E-commerce App',
    tools: 'React js',
  },
  {
    id: 3,
    image: IMG3,
    github: 'https://github.com/nuru11/Node-js-Store-app',
    goLive: 'https://node-js-e-commerce-app.onrender.com',
    name: 'Node-js E-commerce App',
    tools: 'Node-js Express Mongodb',
  },

  {
    id: 4,
    image: IMG4,
    
    goLive: 'https://gumigayorealestate.com.et/',
    name: 'Real Estate Website',
    tools: 'wordpress',
  },


  {
    id: 5,
    image: IMG5,
   
    goLive: 'http://etazabhotel.com.et/',
    name: 'Hotel Website',
    tools: 'wordpress',
  },
 

  
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, github, goLive, name, tools }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="portfolio-img" src={image} alt="" />
              </div>
              <ul className="portfolio-ul">
                <li className="portfolio-li-name">{name}</li>
                <li className="portfolio-li-tools">{tools}</li>
              </ul>
              <div className="portfolio__item-cta">
                {tools === "wordpress" ? "" : <a href={github} target="_blank" className="btn" rel="noopener noreferrer">
                  FaGithub
                </a>}
                <a href={goLive} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
