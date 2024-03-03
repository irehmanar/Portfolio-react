import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abdul Rehman</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagramSquare /></a>
        <a href="https://twitter.com"><FaXTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;AHM. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
