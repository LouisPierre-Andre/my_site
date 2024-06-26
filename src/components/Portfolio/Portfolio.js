import React from 'react'
import HeroAbout from '../About_page/Hero_about/HeroAbout'
import HERO_PORTFOLIO from './Images/bg (3).jpg'
import PortfolioSection from '../Home_page/Portfolio/Portfolio'

function Portfolio() {
  return (
    <div>
      <HeroAbout title="Mon Portfolio" hero_img={HERO_PORTFOLIO} />
      <PortfolioSection classs="portfolio" />

    </div>
  )
}

export default Portfolio