import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src='/images/restaurant.jpg' alt='restaurant'/>
      <div className='item'>
        <h3> Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>We believe that it is all about BIG DREAMS and the small details!</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
