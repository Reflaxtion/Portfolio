 import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vactor1 from '../../img/Vector1.png'
import Vactor2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crowm from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from "react";
import {motion} from  'framer-motion';
import { Link } from 'react-scroll'


const Intro = () => {
  const transition = {duration : 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode? 'white': ''}}>Hy! I Am</span>
          <span>Neeraj Kumar</span>
          <span>Graphic designer with the high level of experience and producing the Quality work  xxxxxxxxxxxxxxxxxxxxxxx </span>
        </div>
        <Link spy={true} to='Contact' smooth={true} >
        <button className='button i-button' >Hire me</button>
        </Link>
        <div className='i-icons'>
          <a href=''>
          <img src={Github} alt=''/>
          </a>
          <a href='https://www.linkedin.com/in/neeraj-kumar-510932227/'>
          <img src={LinkedIn} alt=''/>
          </a>
          <a href='https://www.instagram.com/popping_neeraj/'>
          <img src={Instagram} alt=''/>
          </a>

        </div>
      </div>
      <div className="i-right">
        <img src={Vactor1} alt=''/>
        <img src={Vactor2} alt=''/>
        <img src={boy} alt=''/>
        {/* <img src={glassesimoji} alt=''/> */}
         

        <motion.div
        initial={{top:'-4%', left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{top: '-4%', left:'68%'}}>
          <FloatingDiv image={Crowm} text1='Graphic' text2='Designer'/>
        </motion.div>
        <motion.div 
          initial={{left:'9rem' , top:'18rem'}}
          whileInView={{left:'0rem'}}
          transition={transition}
          style={{top:'18rem'}}>
          <FloatingDiv image={thumbup} text1='Best Design' text2='Award'/>
        </motion.div>

        {/* <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
        <div className='blur' style={{
          background: "#C1F5FF",
          top: '17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem'
        }}></div> */}
      </div>
      
    </div>
  )
}

export default Intro
