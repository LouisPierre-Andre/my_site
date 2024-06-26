import React from 'react'
import HeroAbout from './HeroAbout/HeroAbout'
import HERO_IMG from './Images/about.jpg'
import AboutSection from './AboutSection/About'
import Skills from './SkillsSection/Skills'
import Service from './ServiceSection/Services'

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