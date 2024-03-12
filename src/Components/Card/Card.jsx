import React from 'react'
import './Card.css'
const Card = ({heading,detail}) => {
  return (
    <div className='card'>
        
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>Larn more</button>
      
    </div>
  )
}

export default Card
