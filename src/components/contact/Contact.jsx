import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'



const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:email@gmail.com" rel="noopener noreferrer" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+44 077777777</h5>
            <a href="https://api.whatsapp.com/send?phone=004477777777" rel="noopener noreferrer" target="_blank">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact