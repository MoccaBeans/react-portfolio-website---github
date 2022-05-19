import React from 'react'
import './about.css'
import Portrait from '../../assets/pfp.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__portrait">
          <div className="about__portrait-image">
            <img src={Portrait} alt="About Portrait"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>X+ Years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>X+ Worldwide</small>
            </article>

            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Projects</h5>
              <small>X+ Completed projects</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci massa, blandit ut porta a, consequat in augue. Etiam dictum venenatis mauris 
            vitae mollis. Donec porta suscipit elit, quis varius est dapibus vel. Integer sit amet vestibulum nunc, nec finibus nisi. In faucibus consequat urna, 
            eget viverra tortor molestie non. Phasellus eget quam at nulla egestas consectetur. Mauris interdum rhoncus ante eget rhoncus.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About