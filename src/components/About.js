import React from 'react'
import Navbar from './Navbar'
import About_Banner from './images/about-banner.jpg'
import Media from './media_link'
import './css/about.css'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className='body'>
            <Media />
            <Navbar />
            <div className='about-container'>
                <div className='left-about'>
                    <img src={About_Banner} alt='about_banner' />

                </div>
                <div className='right-about'>
                    <h1>about me</h1>
                    <div className='mobile_about'>
                        <p>About me , that will be a nice discussion. I'll introduce myself as a introvert , weeb and many names. people know me as DARKSKy , DS x OBITO , DS x Newbie and DS x EMPTY. Actually I'm studying at Computer Science & Technology (CST). Besides , I'm working on MIUI MODIFICATIONS & Development. also some graphic work , web development & eating and sleep. Favorite people : anyone who can use their head and less talk person. i really live on anime , scifi movies & netflix web series. and i'm a lazy person , can't help with that. i believe in loyalty.</p>
                        <h3>Device :</h3>
                        <p>
                            <li>Redmi note 9 (Merlin).</li>
                            <li>Walton Passion BP3800.</li>
                        </p>
                        <h3>Favorite Anime :</h3>
                        <p>
                            <li>Naruto.</li>
                            <li>Jujutsu Kaisen.</li>
                        </p>
                        <h3>Favorite Charecters :</h3>
                        <p>
                            <li>OBITO UCHIHA.</li>
                            <li>KAKASHI HATAKE.</li>
                            <li>PAIN.</li>
                            <li>SASUKE UCHIHA.</li>
                            <li>GOJO SATURO</li>
                            <li>NARUTO UZUMAKI</li>
                            <li>More.</li>
                        </p>
                        <Link to='/contact' className='mobile-contact'>Contacts here</Link>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default About