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
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <GoProjectRoadmap className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <IoIosPeople className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>
          </div>



          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae consectetur neque aut ut modi excepturi, voluptatibus nemo ad corrupti inventore, nihil dicta odit dolores nesciunt enim veritatis! Labore, culpa.
          </p>


          <a href="#Contact" className="btn btn-primary">Let's Talk</a>


        </div>







        </div>

      
    </section>
  )
}

export default About
