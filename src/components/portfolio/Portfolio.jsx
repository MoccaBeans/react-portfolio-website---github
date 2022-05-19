import React from 'react'
import './portfolio.css'
import ImgAnt from '../../assets/ants.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ImgAnt} alt="Ants"/>
          </div>
          <h3>This is a portfolio title</h3>
          <a href="https://github.com" className='btn btn-primary h'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ImgAnt} alt="Ants"/>
          </div>
          <h3>This is a portfolio title</h3>
          <a href="https://github.com" className='btn btn-primary h'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio