import React from 'react'
import Navbar from './Navbar'
import Media from './media_link'
import './css/project.css'
import Cards from './cards.js'
import Project_Banner from './images/project-banner.jpg'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className='body'>
      <Media />
      <Navbar />
      <div className='body-container'>
        <div className='left-section'>
          <h1>projects</h1>
          <Cards/>
          <Link className='see_more' to='https://t.me/ds_x_newbie'>See More</Link>
        </div>
        <div className='right-section'>
          <img src={Project_Banner} alt='setting_logo' />
        </div>




      </div>

    </div>
  )
}

export default Project