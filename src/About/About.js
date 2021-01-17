import React, {Component} from 'react'
import './About.css';
import MainPhoto from '../images/main_photo.jpg'

class About extends Component {

  render () {
    return (
      <div className='About'>
        <h1>Joe Dickey</h1>
        <h2>Full Stack Developer</h2>
        <img id='main_photo' src={MainPhoto} alt='Portfolio'/>
        <div className='About_links'>
            <a href='mailto:joseph.r.dickey@gmail.com' target='_blank' rel='noreferrer' className='Links_option'>Email</a>
            <a href='https://www.linkedin.com/in/joe-dickey' target='_blank' rel='noreferrer' className='Links_option'>LinkedIn</a>
            <a href='https://github.com/joedickey' target='_blank' rel='noreferrer' className='Links_option'>GitHub</a>
        </div>
        <div className='About_text'>
            <h3 className='About_title'>About Me</h3>
            <p className='About_desc'>This is where I will tell you all about me. It will be very interesting and will definitely make you want to hire me. Also I like music, isn't that interesting?</p>
        </div>
      </div>
    )
  }
}

export default About;
