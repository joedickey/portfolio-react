import React, {Component} from 'react'
import './Project.css';

class Project extends Component {

  render () {
    const links = this.props.links.map((link, idx) => <a  key={`link_${idx}`} href={link.url} target='_blank' rel='noreferrer' className='Project_link_option'>{link.name}</a>)
    const skills = this.props.tech.map((skill, idx) => <span key={`skill_${idx}`} className='Project_skill_option'>{skill}</span> )
    
    return (
      <div className='Project' key={`proj_${this.props.key_val}`}>
            <div className='Project_photo'>
                <a href={this.props.links[0].url} target='_blank' rel='noreferrer' className='Photo_link'>
                  <img className='Project_image' src={this.props.screenshot} alt='project_image'></img>
                </a>
            </div>
            <div className='Project_info'>
                <h3 className='Project_title'>{this.props.title}</h3>
                <p className='Project_desc'>{this.props.desc}</p>
                <p className='Project_heading'>Links:</p>
                <div className='Project_links'>
                    {links}
                </div>
                <p className='Project_heading'>Technology Used:</p>
                <div className='Project_skills'>
                    {skills}
                </div>
            </div>
        </div>
    )
  }
}

export default Project;
