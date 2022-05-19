import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services_container'>
      <article className='service'>
        <div className='service__head'>
          <h3>Games Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Fusce placerat fermentum magna, a porta enim volutpat sed.</p>
          </li>
        </ul>
      </article>

    </div>
    </section>
  )
}

export default Services