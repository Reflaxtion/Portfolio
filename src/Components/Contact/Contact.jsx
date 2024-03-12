import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef }  from "react";
import { themeContext } from '../../Context'
import { useContext } from "react";

const Contact = () => {
  const form = useRef();
  const [done, setDone] =useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7263qbe', 'template_odzy2cr', form.current, {
        publicKey: '1IFcTNiVxoewt64c1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className='contact-form' id='Contact'>
      <div className="w-left">
        <div className="awesome">
            <span style={{color:darkMode? 'white':''}}>Get in touch</span>
            <span>Contact me</span>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input text='text' name='user_name' className='user' placeholder='Name' />
            <input text='email' name='user_email' className='user' placeholder='Email' />
            <textarea name='message' className='user' placeholder='Message' />
            <input type='submit' value='Send' className='button'  />
            <span className='t-color'>{done && 'Thanks for  your message!'}</span>
            <div className="blur c-blurl"
                 style={{background: 'var(--purple)'}}
            ></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
