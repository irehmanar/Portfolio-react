import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../Assets/me.png'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header className='container header_container'>

    <h5>Hello I'm</h5>
    <h1>Abdul Rehman</h1>
    <h5 className="text-light">Front-End Developer</h5>
    <CTA/>
    <HeaderSocials/>
    <div className="me">
      <img src={me} alt="me" />
    </div>
    <a href="#Contact" className='scroll__down'>Scroll Down</a>


    </header>

  )
}

export default Header
