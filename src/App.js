import React, {Component} from 'react'
import './App.css';
import Header from './Header/Header'
import About from './About/About'
import Project from './Project/Project'
import Contact from './Contact/Contact'

class App extends Component {

  render () {
    return (
      <div className='App'>
        <Header />
        <div id='about' className='App_view_container'>
          <About />
        </div>
        <h2 className='Section_title'>Projects</h2>
        <div id='projects' className='App_view_container'>
          <Project />
          <Project />
          <Project />
        </div>
        <h2 className='Section_title'>Contact</h2>
        <div id='contact' className='App_view_container'>
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;
