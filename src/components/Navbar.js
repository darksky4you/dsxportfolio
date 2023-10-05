import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/nav.css'

const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <h1 className='logo_mobile'>DS</h1>
                <ul className='navigation'>
                    <li><NavLink to="/"><ion-icon name="home-outline"></ion-icon>
                        <span>root</span>
                        </NavLink></li>
                    <li><NavLink to="/Project"><ion-icon name="cog-outline"></ion-icon>
                        <span>projects</span>
                        </NavLink></li>
                    <li><NavLink to="/About"><ion-icon name="person-outline"></ion-icon>
                        <span>about</span>
                        </NavLink></li>
                </ul>
                

            </div>


        </>
    )
}

export default Navbar