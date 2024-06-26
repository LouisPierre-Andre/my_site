import React from 'react'
import HeroAbout from './Hero_about/HeroAbout'
import HERO_IMG from './Images/about.jpg'
import AboutSection from './About_section/About'
import Skills from './Skills_section/Skills'
import Service from './Service_section/Services'

function About() {
    return (
        <div>
            <HeroAbout title="A Propos" hero_img={HERO_IMG} />
            <AboutSection />
            <Skills />
            <Service />

        </div>
    )
}

export default About