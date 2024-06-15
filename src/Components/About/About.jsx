import React from 'react'
import './About.css'
import me from '../../Assets/me-about.jpeg'
import { LiaAwardSolid } from "react-icons/lia";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
function About() {
  return (
    <section id='About'>
        <h5>Get  to Know</h5>
        <h1>About Me</h1>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={me} alt="About me"/>
            </div>
          </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <LiaAwardSolid className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months Working</small>
            </article>
            <article className='about__card'>
              <GoProjectRoadmap className='about__icon'/>
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
            <article className='about__card'>
              <IoIosPeople className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>
          </div>



          <p>
          Highly motivated and results-oriented BSCS student at NUST, eagerly pursuing an in-depth understanding of front-end development. Driven by a passion for crafting engaging and user-centric web experiences, I am currently honing my skills in React, the industry-standard JavaScript library for building dynamic and interactive user interfaces.
          </p>


          <a href="#Contact" className="btn btn-primary">Let's Talk</a>


        </div>







        </div>

      
    </section>
  )
}

export default About
