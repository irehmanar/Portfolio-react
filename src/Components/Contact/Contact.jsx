import React from 'react'
import './Contact.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa6";
function Contact() {

  const submit = (e) =>{
    e.target.reset();
  }
  return (
    <section id='Contact'>
      <h5>Get in Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abrehman4163@gmail.com</h5>
            <a href="mailto:abrehman4163@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
          <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Abdul Rehman</h5>
            <a href="https://m.me/abdulrehman">Send a Message</a>
          </article>
          <article className="contact__option">
          <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+92 3*********</h5>
            <a href="https://api.whatsapp.com/send?phone+923024917963">Send a Message</a>
          </article>
        </div>


        <form>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' placeholder='Your Message' rows={7} required />
          <button  className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
