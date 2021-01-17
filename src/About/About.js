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
            <p className='About_desc'>I am a full-stack developer who is proficient with Javascript, React, HTML, CSS, Node.js, and PostgreSQL. I am a graduate of the Thinkful engineering program coming from a background of working as a professional musician. As a bass player, I have performed and recorded internationally with Grammy-winning musicians as well as produced and released music for my electronic music project, Body Copy, on a number of independent labels.</p>
        </div>
      </div>
    )
  }
}

export default About;
