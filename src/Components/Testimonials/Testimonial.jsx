import React from 'react'
import './Testimonial.css'
import{Swiper, SwiperSlide}  from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import {Pagination} from  'swiper'
import "swiper/css/pagination"
const Testimonial = () => {
    const clients=[
        {
            img: profilePic1,
            review:
             "Lorem ipsum dolor, sit amit consectetur adipising elit. Ex officiis molestae quod tempora laundantium, cumque error a nist placeat quaea exercitatationem, maiores reiciendis! Eaquedict minima, iure maiores dolorum sed. "
        },
        {
            img: profilePic2,
            review:
             "Lorem ipsum dolor, sit amit consectetur adipising elit. Ex officiis molestae quod tempora laundantium, cumque error a nist placeat quaea exercitatationem, maiores reiciendis! Eaquedict minima, iure maiores dolorum sed. "
        },
        {
            img: profilePic3,
            review:
             "Lorem ipsum dolor, sit amit consectetur adipising elit. Ex officiis molestae quod tempora laundantium, cumque error a nist placeat quaea exercitatationem, maiores reiciendis! Eaquedict minima, iure maiores dolorum sed. "
        },
        {
            img: profilePic4,
            review:
             "Lorem ipsum dolor, sit amit consectetur adipising elit. Ex officiis molestae quod tempora laundantium, cumque error a nist placeat quaea exercitatationem, maiores reiciendis! Eaquedict minima, iure maiores dolorum sed. "
        }
    ]
  return (
  
    
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading" >
            <span>Clients always get</span>
            <span> Exceptional Work </span>
            <span>from me...</span>
        </div>
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}>
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                       <div className="testimonial">
                        <img  src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div> 
                    </SwiperSlide>
                )
            })}
        </Swiper>

   

    
      
    </div>
  )
}

export default Testimonial; 

