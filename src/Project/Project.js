import React, {Component} from 'react'
import './Project.css';
import MainPhoto from '../images/main_photo.jpg'

class Project extends Component {

  render () {
    const slideImages = [
        '../images/test.jpeg',
      ]

    return (
      <div className='Project'>
            <div className='Project_photo'>
                <img className='Project_image' src={MainPhoto} alt='1'></img>
            </div>
            <div className='Project_info'>
                <h3 className='Project_title'>Project Title</h3>
                <p className='Project_desc'>Project description</p>
                <div className='Project_links'>
                    <a href='' target='_blank' rel='noreferrer' className='Project_link_option'>
                        Live App
                    </a>
                    <a href='' target='_blank' rel='noreferrer' className='Project_link_option'>
                        Client Repo
                    </a>
                    <a href='' target='_blank' rel='noreferrer' className='Project_link_option'>
                        API Repo
                    </a>
                </div>
                <div className='Project_skills'>
                    <span className='Project_skill_option'>Skill 1</span>
                    <span className='Project_skill_option'>Skill 2</span>
                    <span className='Project_skill_option'>Skill 3</span>
                    <span className='Project_skill_option'>Skill 4</span>
                    <span className='Project_skill_option'>Skill 5</span>
                    <span className='Project_skill_option'>Skill 6</span>
                    
                </div>
            </div>
        </div>
    )
  }
}

export default Project;
