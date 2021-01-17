import React, {Component} from 'react'
import './Contact.css';

class Contact extends Component {

  render () {

    // CLEAR FIELDS ON
    return (
      <div className='Contact'>
        <p className='Contact_text'>Send me a message!</p>
        <form className='Contact_form' action='https://formspree.io/xpzyevze' method='post'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
            <label htmlFor='email'>Email:</label>
            <input id='email' name='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' required />
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' maxLength='200' required />
            <input id='submit' type='submit' value='Submit' /> 
        </form>
      </div>
    )
  }
}

export default Contact;
