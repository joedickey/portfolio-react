import React, {Component} from 'react'
import './References.css';

class References extends Component {
  render () {
    return (
      <div className='References'>
        <div className='References_text'>
            <p className='References_quote'>"Joe Dickey is one of those candidates who you do not want to let getaway. He is the type of talent that makes him the best to work with. Because he is strong technically, and with excellent soft-skills; he can fit right in with any team. Additionally, Joe is dependable, consistent, hard-working, and smart, so he can learn any variation of your technology stack quickly, and master it dependably. So, I am as confident then, as I am now, Joe will make a great addition to your company, and help your projects succeed."</p>
            <img className='References_icon' src='/images/reference.svg' alt='ref_icon'></img>
            <h3 className='References_name'>Nash Worth</h3>
            <h4 className='References_title'>CEO, NetCinematics</h4>
        </div>
        <hr></hr>
        <div className='References_text'>
            <p className='References_quote'>"Joe has shown an incredible aptitude for the skill sets required for this career. He is able to grasp complex concepts like data structures and see their usefulness. Coupled with his great skills in collaboration, I’m convinced that he will be an essential asset to any team he ends up on in a very short time."</p>
            <img className='References_icon' src='/images/reference.svg' alt='ref_icon'></img>
            <h3 className='References_name'>Edd Kerr</h3>
            <h4 className='References_title'>Software Engineer, Planning Center</h4>
        </div>
      </div>
    )
  }
}

export default References;
