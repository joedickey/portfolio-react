import React, {Component} from 'react'
import './App.css';
import Header from './Header/Header'
import About from './About/About'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import References from './References/References'
import {projects} from './projects_data'

class App extends Component {

  render () {
    const projectsList = projects.map((proj, idx) => 
      <React.Fragment key={idx}>
        <Project
          key_val={idx}
          title={proj.title} 
          screenshot={proj.screenshot}
          desc={proj.desc}
          links={proj.links}
          tech={proj.tech}/>
        {idx === projects.length - 1 ? null : <hr></hr>} {/* does not render hr after last item */}
      </React.Fragment>) 

    return (
      <div className='App'>
        <Header />
        <div id='about' className='App_view_container'>
          <About />
        </div>
        <h2 className='Section_title'>Projects</h2>
        <div id='projects' className='App_view_container'>
          {projectsList}
        </div>
        <h2 className='Section_title'>References</h2>
        <div id='references' className='App_view_container'>
          <References />
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
