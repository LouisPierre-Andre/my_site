import React from 'react'
import HeroAbout from '../AboutPage/HeroAbout/HeroAbout'
import HERO_CONTACT from './Images/contact_hero2.jpg'
import Contact from '../HomePage/Contact/Contact5'
import "./ContactPage.css"


function Contact_page() {
  return (
    <div className='Contact_page_container'>
      <HeroAbout title="Contactez-moi" hero_img={HERO_CONTACT} />
      <Contact />

    </div>
  )
}

export default Contact_page