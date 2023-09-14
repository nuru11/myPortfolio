import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/resturant-img.jpg';
import IMG2 from '../../assets/e-commerce.jpg';
import IMG3 from '../../assets/nodejs-ecommerce.jpg';
import IMG4 from '../../assets/next-js-ecommerce.jpg';
//import IMG5 from '../../assets/calculator.png';
//import IMG6 from '../../assets/noteTaker.jpg';

const data = [
  {
    id: 4,
    image: IMG4,
    github: 'https://github.com/nuru11/NextJs-Restaurant-App',
    goLive: 'https://next-js-restaurant-app-zeta.vercel.app/',
    name: 'Next-js E-commerce App',
    tools: 'Next-js,React-js,Redux-toolkit,Typescript,Mongodb,jest,React-Testing-Library',
  },
  {
    id: 1,
    image: IMG1,
    github: 'https://github.com/nuru11/lastRestu.git',
    goLive: 'https://restaurant-nuru11.vercel.app/',
    name: 'React-js Restaurant',
    tools: 'React js',
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
                <a href={github} target="_blank" className="btn" rel="noopener noreferrer">
                  Gthub
                </a>
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
