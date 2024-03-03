import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target='_blank'><FaLinkedin /></a>
      <a href="https://instagram.com" target='_blank'><FaInstagramSquare /></a>
      <a href="https://github.com" target='_blank'><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials
