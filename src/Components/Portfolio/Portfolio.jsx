import React from 'react'
import './Portfolio.css'
import img1 from '../../Assets/portfolio1.jpg'
import img2 from '../../Assets/portfolio2.jpg'
import img3 from '../../Assets/portfolio3.jpg'
import img4 from '../../Assets/portfolio4.jpg'
import img5 from '../../Assets/portfolio5.png'
import img6 from '../../Assets/portfolio6.jpg'
function Portfolio() {
  return (
    <section id='Portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">

          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={img1} alt="" />
            </div>
              <h3>Portfolio Website</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>

          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={img2} alt="" />
            </div>
              <h3>E-commerence Website</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>


          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={img3} alt="" />
            </div>
              <h3>Admin Dashboard</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>


          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={img4} alt="" />
            </div>
              <h3>Animation Website</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>



          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={img5} alt="" />
            </div>
              <h3>Medical Website</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>


        </div>
    </section>
  )
}

export default Portfolio
