import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const contact = () => {
    return (
        <div className='cbody'>
            <Navbar />
            <div className='contact-links'>
                <Link target='_blank' to="https://facebook.com/itzshunno">facebook</Link>
                <Link target='_blank' to="https://instagram.com/itzshunno">instagram</Link>
                <Link target='_blank' to="https://discord.gg/8zQzE4JR">discord</Link>
                <Link target='_blank' to="https://github.com/darksky4you">github</Link>
                <Link target='_blank' to="https://t.me/darksky4you">telegram</Link>
            </div>

        </div>
    )
}

export default contact