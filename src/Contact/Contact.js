import React, {Component} from 'react'
import './Contact.css';

class Contact extends Component {

  state = {
    formName: '',
    formEmail: '',
    formMessage: ''
  }

  handleChange = (e) => {
    if(e.target.name === 'name') {
      this.setState({
        formName: e.target.value
      });
    } else if(e.target.name === 'email') {
      this.setState({
        formEmail: e.target.value
      });
    } else if(e.target.name === 'message') {
      this.setState({
        formMessage: e.target.value
      });
    }
  }


  render () {

    return (
      <div className='Contact'>
        <p className='Contact_text'>Send me a message!</p>
        <form className='Contact_form' action='https://formspree.io/xpzyevze' method='post' >
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' value={this.state.formName} required  onChange={(e) => this.handleChange(e)}/>
            <label htmlFor='email'>Email:</label>
            <input id='email' name='email' value={this.state.formEmail}  required onChange={(e) => this.handleChange(e)}/>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' maxLength='200' rows='4' value={this.state.formMessage}  required onChange={(e) => this.handleChange(e)}/>
            <input id='submit' type='submit' name='submit' value='Submit' /> 
        </form>
        <hr></hr>
        <div className='Contact_links'>
            <a href='mailto:joseph.r.dickey@gmail.com' target='_blank' rel='noreferrer' className='Links_option'>Email</a>
            <a href='https://www.linkedin.com/in/joe-dickey' target='_blank' rel='noreferrer' className='Links_option'>LinkedIn</a>
            <a href='https://github.com/joedickey' target='_blank' rel='noreferrer' className='Links_option'>GitHub</a>
        </div>
      </div>
    )
  }
}

export default Contact;
