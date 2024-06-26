import React from 'react'
import HeroAbout from '../About_page/Hero_about/HeroAbout'
import HERO_CONTACT from './Images/contact_hero2.jpg'
import Contact from '../Home_page/Contact/Contact5'
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