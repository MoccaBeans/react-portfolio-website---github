import React from 'react'
import './header.css'
import CTA from './CTA'
import Portrait from '../../assets/pfp.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Sky Da Silva</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='portrait'>
          <img src={Portrait} alt="portrait"/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header