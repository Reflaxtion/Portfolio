import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt='' style={{width: "100%"}}/>
        <div className="f-content">
            <span>Chandankumarr1029@gmail.com</span>
            <div className="f-icons">
          <a href='https://www.instagram.com/popping_neeraj/'>
                <Insta color='white' size='3rem'/>
            </a>  
                <Facebook color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
            </div>

        </div>
         
    </div>
  )
}

export default Footer
