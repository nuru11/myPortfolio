import React from 'react';
import './portfolio.css';



// import IMG2 from '../../assets/e-commerce.jpg';
import IMG1 from '../../assets/ethioSpareMobile.jpg';
import IMG2 from '../../assets/ethioSpare.png';

import IMG3 from '../../assets/hulumTicket.webp';


import IMG4 from '../../assets/next-js-ecommerce.jpg';
import IMG5 from '../../assets/agmasphoto.png';
import IMG6 from '../../assets/ethioSpare.png';
//import IMG1 from '../../assets/resturant-img.jpg';
//import { FaGithub } from 'react-icons/fa';

const data = [
  {
    id: 1,
    image: IMG1,
     github: 'no',
    goLive: 'https://play.google.com/store/apps/details?id=com.copy4.copy4',
    name: 'Spare Parts Ecommerce Mobile App ',
    tools: 'Flutter',
  },
  
  {
    id: 2,
    image: IMG2,
     github: 'no',
    goLive: 'https://ethiosparemarket.com/',
    name: 'Spare Parts Ecommerce Web',
    tools: 'Wordpress, Woocommerce',
  },

  {
    id: 3,
    // image: IMG3,
    // github: 'https://github.com/nuru11/Node-js-Store-app',
    // goLive: 'https://node-js-e-commerce-app.onrender.com',
    // name: 'Node-js E-commerce App',
    // tools: 'Node-js Express Mongodb',
    image: IMG3,
    github: 'no',
    goLive: 'https://play.google.com/store/apps/details?id=com.abdure.huluticket',
    name: 'Bus Bookin System Mobile App',
    tools: 'React Native',
  },

  {
    id: 4,
    image: IMG4,
    
    github: 'https://github.com/nuru11/NextJs-Restaurant-App',
    goLive: 'https://next-js-restaurant-app-zeta.vercel.app/',
    name: 'Next-js Restaurant Web',
    tools: 'Next-js,React-js,Redux-toolkit,Typescript,Mongodb,jest,React-Testing-Library',
  },


  {
    id: 5,
    image: IMG5,
    github: 'no',
    goLive: 'https://agmasethiopia.org/',
    name: 'NGO Website',
    tools: 'wordpress',
  },

  {
    id: 6,
    image: IMG6,
    github: 'no',
    goLive: 'https://homelandhotel.com.et/',
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
                {github === "no"  ? "" : <a href={github} target="_blank" className="btn" rel="noopener noreferrer">
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
