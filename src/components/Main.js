import React from 'react'
import Navbar from './Navbar.js'
import Media from './media_link.js'
import { Typewriter } from 'react-simple-typewriter'

const Main = () => {
  return (

    <div className='body'>
      <Media/>
      <Navbar />

      <div className='text-anime'>

        <span className='anime'>
          {}
          <Typewriter
            words={['DARKSKy', 'DS x OBITO', 'DS x EMPTY']}
            loop={true}
            cursor
            cursorStyle='.'
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>

      </div>

    
      
      
      



    </div>
  )
}

export default Main