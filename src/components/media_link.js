import React from 'react'
import './css/media_link.css'
import { Link } from 'react-router-dom'

const media_link = () => {
  return (
    <div className='link_box'>
    <h1 className='logo'>DS x OBITO</h1>
    <div className='links'>
        <Link target='_blank' to="https://facebook.com/itzshunno">facebook</Link>
        <Link target='_blank' to="https://instagram.com/itzshunno">instagram</Link>
        <Link target='_blank' to="https://discord.gg/8zQzE4JR">discord</Link>
        <Link target='_blank' to="https://github.com/darksky4you">github</Link>
        <Link target='_blank' to="https://t.me/darksky4you">telegram</Link>
    </div>



    </div>
  )
}

export default media_link