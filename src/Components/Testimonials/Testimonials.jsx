import React from 'react'
import "./Testimonials.css"
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const data = [
  {
    avatar:AVTR1,
    name:"Tina Snowa",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto ratione nihil et saepe, eaque recusandae eum laborum, mollitia fugit accusamus quibusdam rerum? Dolor ducimus eligendi corporis sint incidunt iusto?"
  },
  {
    avatar:AVTR2,
    name:"Tina Snowb",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto ratione nihil et saepe, eaque recusandae eum laborum, mollitia fugit accusamus quibusdam rerum? Dolor ducimus eligendi corporis sint incidunt iusto?"
  },
  {
    avatar:AVTR3,
    name:"Tina Snowc",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto ratione nihil et saepe, eaque recusandae eum laborum, mollitia fugit accusamus quibusdam rerum? Dolor ducimus eligendi corporis sint incidunt iusto?"
  },
  {
    avatar:AVTR4,
    name:"Tina Snowd",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto ratione nihil et saepe, eaque recusandae eum laborum, mollitia fugit accusamus quibusdam rerum? Dolor ducimus eligendi corporis sint incidunt iusto?"
  }
]
function Testimonials() {  
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Tesimonials</h2>

      <Swiper pagination={true} modules={[Pagination]} className="container testimonials__container mySwiper">
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5>{name}</h5>
            <small className='client__review'>{review}</small>
              </SwiperSlide>
              
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
