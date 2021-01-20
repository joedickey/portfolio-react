import React, {Component} from 'react'
import './Header.css';

class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <div className='Header_nav'>
            <a href='#about' className='Nav_option'>About</a>
            <a href='#projects' className='Nav_option'>Projects</a>
            <a href='#references' className='Nav_option'>References</a>
            <a href='#contact' className='Nav_option'>Contact</a> 
        </div>
      </div>
    )
  }
}

export default Header;
