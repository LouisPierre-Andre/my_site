import React from 'react'
import HeroAbout from '../AboutPage/HeroAbout/HeroAbout'
import HERO_PORTFOLIO from './Images/bg (3).jpg'
import PortfolioSection from '../HomePage/Portfolio/Portfolio'

function Portfolio() {
  return (
    <div>
      <HeroAbout title="Mon Portfolio" hero_img={HERO_PORTFOLIO} />
      <PortfolioSection classs="portfolio" />

    </div>
  )
}

export default Portfolio